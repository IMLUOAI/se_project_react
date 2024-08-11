import React from "react";
import "../blocks/itemModal/itemModal.css";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemModal = ({ selectedCard, onClose, preview, onDelete, isLoading }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const isOWn = selectedCard.owner === currentUser?._id;

  const itemDeleteButtonClassName = `modal__delete-button ${
    isOWn ? "modal__delete-button_visible" : "modal__delete-button_hidden"
  }`;

  return (
    <div className={`modal modal_type_${preview}`}>
      <div className="modal__preview-container">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__preview-image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <h3 className="modal__preview-name">{selectedCard.name}</h3>
        {isOWn && (
          <button
            className={itemDeleteButtonClassName}
            type="button"
            onClick={onDelete}
          >
            {isLoading ? "Deleting..." : "Delete item"}
          </button>
        )}
        <p className="modal__preview-weather">
          Weather: {selectedCard.weather}
        </p>
      </div>
    </div>
  );
};

export default ItemModal;
