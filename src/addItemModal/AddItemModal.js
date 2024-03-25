import React from "react";
import ModalWithForm from "../components/ModalWithForm";
const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  return (
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
  );
};

export default AddItemModal;
