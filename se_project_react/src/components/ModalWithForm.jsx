import React from "react";
import "../blocks/modalWithForm/modalWithForm.css";

const ModalWithForm = ({
  authentication,
  children,
  title,
  isOpen,
  onClose,
  onSubmit,
}) => {
  if(!isOpen) {
    return null;
  }

  return (
    <div className={`modal modal__type_${authentication}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child);
          })}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
