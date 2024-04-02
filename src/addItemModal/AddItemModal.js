import React, { useState } from "react";
import ModalWithForm from "../components/ModalWithForm";
const AddItemModal = ({ isOpen, onAddItem, handleCloseModal }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const [url, setUrl] = useState("");
  const handleUrlChange = (e) => {
    console.log(e.target.value);
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, url });
  };
  return (
    <ModalWithForm
      title="New garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onAddItem={handleSubmit}
    >
      <label className="modal__label" value={name} onChange={handleNameChange}>
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
      <label className="modal__label" value={url} onChange={handleUrlChange}>
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
  );
};

export default AddItemModal;
