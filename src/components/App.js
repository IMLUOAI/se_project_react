import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "../blocks/app/app.css";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { getForcastWeather, ParseWeatherData } from "../utils/weatherApi";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherTemp, setWeatherTemp] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    imageUrl: "",
  });
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleChange = (e) => {
    if (e.target && e.target.name) {
      const { name, value } = e.target;
      console.log(`Name:${name}, value:${value}`);
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      console.error("Event target or name property is undefined");
    }
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForcastWeather().then((data) => {
      console.log(data);
      const temperature = ParseWeatherData(data);
      setWeatherTemp(temperature);
    });
  }, []);
  console.log(weatherTemp);
  return (
    <div className="page__section">
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New garment"
          onClose={handleCloseModal}
          formData={formData}
          onChange={handleChange}
        >
          <label className="modal__label">
            Name
            <input
              type="text"
              name="name"
              className="modal__input"
              id="profile-name-input"
              placeholder="Garment Name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.imageUrl}
              onChange={handleChange}
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
                <label>Hot</label>
              </div>
              <div>
                <input type="radio" name="weatherType" id="cold" value="cold" />
                <label>Cold</label>
              </div>
              <div>
                <input type="radio" name="weatherType" id="warm" value="warm" />
                <label>Warm</label>
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
