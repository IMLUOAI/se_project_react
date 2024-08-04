import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { setToken, getToken, removeToken } from "../utils/token";
import { getForcastWeather, parseWeatherData } from "../utils/weatherApi";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../blocks/app/app.css";
import auth from "../utils/auth";
import api from "../utils/api";
import Profile from "./Profile";
import ItemModal from "./ItemModal";
import AddItemModal from "./AddItemModal";
import ConfirmationModal from "./ConfirmationModal";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import ProtectedRoute from "./ProtectedRoute";
import CurrentUserContext from "../contexts/CurrentUserContext";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import EditProfileModal from "./EditProfileModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState([]);
  const [weatherTemp, setWeatherTemp] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  // const location = useLocation();

  const handleOpenRegisterModal = () => setActiveModal("register");
  const handleOpenLoginModal = () => setActiveModal("login");
  const handleCloseModal = () => setActiveModal("");

  const handleRegistration = ({ email, password, name, avatar }) => {
    if (password) {
      auth
        .register(email, password, name, avatar)
        .then(() => {
          setActiveModal("login");
        })
        .catch(console.error);
    }
  };
  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          return api.getUserInfo();
        }
      })
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        setActiveModal("");
        navigate("/profile");
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    removeToken();
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate("/");
    setActiveModal("login");
  };

  const handleEditProfile = () => {
    setActiveModal("edit");
    navigate("/profile");
  };

  const handleCreateModal = () => {
    setActiveModal("create");
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
      .deleteItem(selectedCard._id)
      .then(() => {
        const newClothingItem = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });
        setClothingItems(newClothingItem);
        setShowConfirmationModal(false);
        setCardToDelete(null);
        handleCloseModal();
      })
      .catch((err) => console.log("Failed to delete:", err));
  };

  const handleAddItemSubmit = ({ name, weather, imageUrl }) => {
    api
      .addItem({ name, weather, imageUrl })
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };
  const handleCardLike = (item) => {
    const token = getToken();
    const { _id, isLiked } = item;

    console.log("Item ID", _id);
    console.log("Token", token);

    !isLiked
      ? api
          .addCardLike(_id, token)
          .then((updatedCard) => {
       
        console.log("Updated card response from addCardLike:", updatedCard);
        const updatedCardData = updatedCard.data;
            
        setClothingItems((cards) =>
              cards.map((card) =>
                card._id === item._id ? updatedCardData : card
              )
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(_id, token)
          .then((updatedCard) => {
            
            console.log("Updated card response from addCardLike:", updatedCard);
            const updatedCardData = updatedCard.data;
    
            
            setClothingItems((cards) =>
              cards.map((card) =>
                card._id === item._id ? updatedCardData : card
              )
            );
          })
          .catch((err) => console.log(err));
  };

  // useEffect to fetch weather data

  useEffect(() => {
    getForcastWeather()
      .then((data) => {
        const weather = parseWeatherData(data);
        setWeatherTemp(weather);
      })
      .catch((err) => {
        console.error(`Failed to fetch weather data: ${err}`);
      });
  }, []);

  // useEffect to fetch clothing items

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

  // useEffect to check the token and get user info

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }
    api
      .getUserInfo()
      .then(({ email, password, name, avatar }) => {
        setIsLoggedIn(true);
        setCurrentUser({ email, password, name, avatar });
      })
      .catch(console.error);
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__section">
          <Header
            userName={currentUser?.name}
            isAuthorized={isLoggedIn}
            onCreateModal={handleCreateModal}
            handleProfileClick={() => navigate("/profile")}
            onRegisterModal={handleOpenRegisterModal}
            onLoginModal={handleOpenLoginModal}
          />

          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Main
                    weatherTemp={weatherTemp}
                    onSelectCard={handleSelectedCard}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile
                    userName={currentUser?.name}
                    userAvatar={currentUser?.avatar}
                    clothingItems={clothingItems}
                    onCreateModal={handleCreateModal}
                    onSelectCard={handleSelectedCard}
                    onCardLike={handleCardLike}
                    handleEditProfile={handleEditProfile}
                    onLogout={handleLogout}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Main />}></Route>
          </Routes>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "edit"}
              handleEditProfile={handleEditProfile}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "register"}
              handleRegistration={handleRegistration}
              handleOpenLoginModal={handleOpenLoginModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login"}
              handleLogin={handleLogin}
              handleOpenRegisterModal={handleOpenRegisterModal}
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
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
