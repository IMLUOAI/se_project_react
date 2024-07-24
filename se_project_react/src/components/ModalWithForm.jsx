import React from "react";
import "../blocks/modalWithForm/modalWithForm.css";

const ModalWithForm = ({
  name,
  children,
  title,
  isOpen,
  onClose,
  onSubmit,
  buttonText,
}) => {
  if(!isOpen) {
    return null;
  }

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        >x</button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child);
          })}
          <div className="modal__submit-container">
            <button type="submit" className="modal_submit-button">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
