import React, { useState } from "react";
import ModalWithForm from "./ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };
  const handleWeatherTypeChange = (e) => {
    setWeather(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" >
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="modal__input"
          id="profile-name-input"
          placeholder="Garment Name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="modal__error"></span>
      </label>
      <label className="modal__label" >
        Image
        <input
          type="text"
          value={imageUrl}
          onChange={handleImageUrlChange}
          name="imageUrl"
          className="modal__input"
          id="profile-Url-input"
          placeholder="Image URL"
          minLength="2"
          maxLength=""
          required
        />
        <span className="modal__error"></span>
      </label>
      <div className="modal__weather">
        <p className="modal__weather-title">Select the weather type:</p>
        <div className="modal__weather-type">
          <div>
            <input
              type="radio"
              name="weatherType"
              id="hot"
              value="hot"
              checked={weather === "hot"}
              onChange={handleWeatherTypeChange}
            />
            <label htmlFor="hot">Hot</label>
          </div>
          <div>
            <input
              type="radio"
              name="weatherType"
              id="cold"
              value="cold"
              checked={weather === "cold"}
              onChange={handleWeatherTypeChange}
            />
            <label htmlFor="cold">Cold</label>
          </div>
          <div>
            <input
              type="radio"
              name="weatherType"
              id="warm"
              value="warm"
              checked={weather === "warm"}
              onChange={handleWeatherTypeChange}
            />
            <label htmlFor="warm">Warm</label>
          </div>
          <div className="modal_submit-container">
            <button type="button" className="modal_submit-button" onClick={handleSubmit}>
              Add garment
            </button>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;