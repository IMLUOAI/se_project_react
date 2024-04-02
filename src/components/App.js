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
import { getAllItems, addItem, deleteItem } from "../utils/api";
function App() {
  const [items, setItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherTemp, setWeatherTemp] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [clothingItems, setClothingItems] = useState([]);
  const userName = "Samuel Luo";
  const userAvatar = "";
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await getAllItems();
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleAddItem = async (name, imageUrl, weather) => {
    try {
      const newItem = await addItem(name, imageUrl, weather);
      setItems([...items, newItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

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
  const handleAddItemSubmit = (item) => {
    setClothingItems([item, ...clothingItems]);
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
