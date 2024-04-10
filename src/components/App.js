import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../blocks/app/app.css";
import ItemModal from "./ItemModal";
import { getForcastWeather, parseWeatherData } from "../utils/weatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../components/AddItemModal";
import Profile from "../components/Profile";
import ConfirmationModal from "./ConfirmationModal";
import api from "../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherTemp, setWeatherTemp] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
  const userName = "Samuel Luo";

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const openConfirmationModal = (card) => {
    setCardToDelete(card);
    setShowConfirmationModal(true);
  };

  const handleDeleteItem = () => {
    api
      .deleteItem(selectedCard)
      .then(() => {
        const newClothingItem = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });
        setClothingItems(newClothingItem);
        setShowConfirmationModal(false);
        setCardToDelete(null);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleAddItemSubmit = ({ name, weather, imageUrl }) => {
    api
      .addItem({ name, weather, imageUrl })
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };
  useEffect(() => {
    getForcastWeather()
      .then((data) => {
        const temp = parseWeatherData(data);
        setWeatherTemp(temp);
      })
      .catch((err) => {
        console.error(`Failed to fetch weather data: ${err}`);
      });
  }, []);

  useEffect(() => {
    api
      .getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  return (
    <Router>
      <div className="page__section">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            userName={userName}
            onClose={handleCloseModal}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherTemp={weatherTemp}
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  userName={userName}
                  clothingItems={clothingItems}
                  onCreateModal={handleCreateModal}
                  onSelectCard={handleSelectedCard}
                />
              }
            />
          </Routes>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={openConfirmationModal}
              openConfirmationModal={openConfirmationModal}
            />
          )}
          {showConfirmationModal && (
            <ConfirmationModal
              // selectedCard={selectedCard}
              confirmation={activeModal}
              onConfirmDelete={() => {
                handleDeleteItem(cardToDelete);
                setShowConfirmationModal(false);
              }}
              onClose={() => {
                setShowConfirmationModal(false);
              }}
              onCancel={() => setShowConfirmationModal(false)}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </Router>
  );
}

export default App;
