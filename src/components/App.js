import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../blocks/app/app.css";
import ItemModal from "./ItemModal";
import { getForcastWeather, parseWeatherData } from "../utils/weatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../addItemModal/AddItemModal";
import Profile from "../components/Profile";
import ConfirmationModal from "./ConfirmationModal";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherTemp, setWeatherTemp] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);
  const userName = "Samuel Luo";
  const userAvatar = "";
  const handleDeleteConfirmation = () => {
    setIsConfirmationModalOpen(true);
  };
  const handleCreateModal = () => {
    setActiveModal("create");
    setIsConfirmationModalOpen(false);
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setIsConfirmationModalOpen(false);
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
    setIsConfirmationModalOpen(false);
  };
  const onAddItem = (value) => {
    console.log(value);
  };
  const handleAddItemSubmit = (newItem) => {
    setClothingItems([newItem, ...clothingItems]);
  };
  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getForcastWeather()
      .then((data) => {
        console.log(data);
        const temperature = parseWeatherData(data);
        setWeatherTemp(temperature);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(weatherTemp);
  console.log(currentTemperatureUnit);

  return (
    <Router>
      <div className="page__section">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header onCreateModal={handleCreateModal} userName={userName} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherTemp={weatherTemp}
                  onSelectCard={handleSelectedCard}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  userName={userName}
                  userAvatar={userAvatar}
                  clothingItems={clothingItems}
                  onCreateModal={handleCreateModal}
                  onAddItem={handleAddItemSubmit}
                />
              }
            />
          </Routes>

          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={onAddItem}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleDeleteConfirmation}
            />
          )}
          {isConfirmationModalOpen && (
            <ConfirmationModal
              selectedCard={selectedCard}
              onClose={() => setIsConfirmationModalOpen(false)}
              onDelete={() => {
                handleDeleteConfirmation();
              }}
              onCancel={() => setIsConfirmationModalOpen(false)}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </Router>
  );
}

export default App;
