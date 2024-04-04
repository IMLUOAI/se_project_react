import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm";
const AddItemModal = ({ isOpen, handleAddItem, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [weatherType, setWeatherType] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };
  const handleWeatherTypeChange = (e) => {
    setWeatherType(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && url.trim() && weatherType.trim()) {
      handleAddItem(name, url);
      setName("");
      setUrl("");
      setWeatherType("");
    }
  };
  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" value={name} onChange={handleNameChange}>
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
      <label className="modal__label" value={url} onChange={handleUrlChange}>
        Image
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
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
            <input
              type="radio"
              name="weatherType"
              id="hot"
              value="hot"
              checked={weatherType === "hot"}
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
              checked={weatherType === "cold"}
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
              checked={weatherType === "warm"}
              onChange={handleWeatherTypeChange}
            />
            <label htmlFor="warm">Warm</label>
          </div>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
