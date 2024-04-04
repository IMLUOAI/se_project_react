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
  const [clothingItems, setClothingItems] = useState([]);
  const userName = "Samuel Luo";
  const userAvatar = "";
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await getAllItems();
        setItems(fetchedItems);
        setClothingItems(fetchedItems);
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
      handleAddItemSubmit(newItem);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleDeleteItem = async (id) => {
    setActiveModal("confirmation");
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

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
                  onAddItem={handleAddItem}
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
                  userAvatar={userAvatar}
                  clothingItems={clothingItems}
                  onCreateModal={handleCreateModal}
                  onAddItem={handleAddItem}
                />
              }
            />
          </Routes>

          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              handleAddItem={handleAddItem}
              onClose={handleCloseModal}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={handleSelectedCard}
              onClose={handleCloseModal}
              onDelete={handleDeleteItem}
            />
          )}
          {activeModal === "confirmation" && (
            <ConfirmationModal
              selectedCard={handleSelectedCard}
              onClose={handleCloseModal}
              onDelete={() => {
                handleDeleteItem(selectedCard.id);
              }}
              onCancel={handleCloseModal}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </Router>
  );
}

export default App;
