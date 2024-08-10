import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
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
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleOpenRegisterModal = () => setActiveModal("register");
  const handleOpenLoginModal = () => setActiveModal("login");
  const handleCloseModal = () => setActiveModal("");

  const handleSubmit = (request) => {
    setIsLoading(true);
    request()
      .then(() => {
        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  const handleRegistration = ({ email, password, name, avatar }) => {
    if (!password || !email) return;

    const makeRequest = () => {
      return auth.register(email, password, name, avatar).then(() => {
        setActiveModal("login");
      });
    };
    handleSubmit(makeRequest);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    const makeRequest = () => {
      return auth
        .authorize(email, password)
        .then((data) => {
          if (data.token) {
            setToken(data.token);
            return api.getUserInfo(data.token);
          }
        })
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
          navigate("/profile");
        });
    };
    handleSubmit(makeRequest);
  };

  const handleLogout = () => {
    removeToken();
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate("/");
    setActiveModal("login");
  };

  const handleEditProfileSubmit = (inputValues) => {
    const makeRequest = () => {
      if (!inputValues.name || !inputValues.avatar) {
        return Promise.reject("Input value invalid");
      }
      return api.editProfile(inputValues).then(() => {
        setCurrentUser(inputValues);
      });
    };
    handleSubmit(makeRequest);
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
    const makeRequest = () => {
      return api.deleteItem(selectedCard._id).then(() => {
        const newClothingItem = clothingItems.filter((card) => {
          return card._id !== selectedCard._id;
        });
        setClothingItems(newClothingItem);
        setShowConfirmationModal(false);
        setCardToDelete(null);
      });
    };
    handleSubmit(makeRequest);
  };

  const handleAddItemSubmit = ({ name, weather, imageUrl }) => {
    const makeRequest = () => {
      return api.addItem({ name, weather, imageUrl }).then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
      });
    };
    handleSubmit(makeRequest);
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };
  const handleCardLike = (item) => {
    const token = getToken();
    const { _id } = item;

    if (!currentUser) {
      console.log("CurrentUser is not available");
      return;
    }

    const isLiked = item.likes.some((id) => id === currentUser._id);

    !isLiked
      ? api
          .addCardLike(_id, token)
          .then((updatedCard) => {
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
            setClothingItems((cards) =>
              cards.map((card) => (card._id === item._id ? updatedCard : card))
            );
          })
          .catch(console.error);
  };

  // useEffect to handleCloseModal;

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

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
      .catch((error) => {
        console.error("Failed to fetch items:", error);
        setClothingItems([]);
      });
  }, [isLoggedIn]);

  // useEffect to check the token and get user info

  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }
    api
      .getUserInfo(jwt)
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user.data);
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
            userAvatar={currentUser?.avatar}
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
                    handleEditProfile={handleEditProfileSubmit}
                    onLogout={handleLogout}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
              isLoading={isLoading}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "edit"}
              onSubmit={handleEditProfileSubmit}
              isLoading={isLoading}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "register"}
              handleRegistration={handleRegistration}
              handleOpenLoginModal={handleOpenLoginModal}
              isLoading={isLoading}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login"}
              handleLogin={handleLogin}
              handleOpenRegisterModal={handleOpenRegisterModal}
              isLoading={isLoading}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={openConfirmationModal}
              openConfirmationModal={openConfirmationModal}
              isLoading={isLoading}
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
