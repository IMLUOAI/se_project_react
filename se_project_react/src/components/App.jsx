import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { setToken, getToken } from "../utils/token";
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

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherTemp, setWeatherTemp] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [currentUser, setCurrentUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenRegisterModal = () => setActiveModal("register");
  const handleOpenLoginModal = () => setActiveModal("login");
  const handleCloseModal = () => setActiveModal("");

  const handleRegistration = ({ email, password, name, avatarUrl }) => {
    if (password) {
      auth
        .register(email, password, name, avatarUrl)
        .then(() => {
          navigate("/login");
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
        if (data.jwt) {
          setToken(data.jwt);
          setCurrentUser(data.user);
          setIsLoggedIn(true);
          const redirectPath = location.state?.pathname || "/profile";
          navigate(redirectPath);
        }
      })
      .catch(console.error);
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

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  // useEffect to fetch weather data

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
      .getUserInfo(jwt)
      .then(({ password, email, name, avatarUrl }) => {
        setIsLoggedIn(true);
        setCurrentUser({ password, email, name, avatarUrl });
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/register") {
      setActiveModal("register");
    } else if (path === "/login") {
      setActiveModal("login");
    } else {
      setActiveModal("");
    }
  }, [location.pathname]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                    userData={currentUser}
                    clothingItems={clothingItems}
                    onCreateModal={handleCreateModal}
                    onSelectCard={handleSelectedCard}
                  />
                </ProtectedRoute>
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
          {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "register"}
              handleRegistration={handleRegistration}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login"}
              handleLogin={handleLogin}
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