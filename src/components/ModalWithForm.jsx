import React from "react";
import "../blocks/modalWithForm/modalWithForm.css";
import { Modal } from "./Modal";

const ModalWithForm = ({
  name,
  title,
  isOpen,
  onClose,
  onSubmit,
  children,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal name={name} onClose={onClose}>
      <h2 className="modal__title">{title}</h2>
      <form className="modal__form" onSubmit={onSubmit}>
        {children}
      </form>
    </Modal>
  );
};

export default ModalWithForm;
