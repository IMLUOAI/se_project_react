import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../blocks/app/app.css";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { getForcastWeather, parseWeatherData } from "../utils/weatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherTemp, setWeatherTemp] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [checked, setChecked] = useState(false);
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
  const handleChange = () => {
    setChecked("!checked");
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
  return (
    <div className="page__section">
      <Header onCreateModal={handleCreateModal} userName={userName} />
      <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New garment" onClose={handleCloseModal}>
          <label className="modal__label">
            Name
            <input
              type="text"
              name="name"
              className="modal__input"
              id="profile-name-input"
              placeholder="Garment Name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="modal__error"></span>
          </label>
          <label className="modal__label">
            Image
            <input
              type="text"
              name="imageUrl"
              className="modal__input"
              id="profile-Url-input"
              placeholder="Image URL"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="modal__error"></span>
          </label>
          <div className="modal__weather">
            <p className="modal__weather-title">Select the weather type:</p>
            <div className="modal__weather-type">
              <div>
                <input type="radio" name="weatherType" id="hot" value="hot" />
                <label htmlFor="hot">Hot</label>
              </div>
              <div>
                <input type="radio" name="weatherType" id="cold" value="cold" />
                <label htmlFor="cold">Cold</label>
              </div>
              <div>
                <input type="radio" name="weatherType" id="warm" value="warm" />
                <label htmlFor="warm">Warm</label>
              </div>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
