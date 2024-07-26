import { useState } from "react";
import "../blocks/modalWithForm/modalWithForm.css";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({
  isOpen,
  handleCloseModal,
  handleLogin,
  handleOpenRegisterModal,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <ModalWithForm
      // buttonText="Log in"
      title="Log in"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          id="email"
          required
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          className="modal__input"
          placeholder="Email"
          minLength="2"
          maxLength="40"
        />
        <span className="modal__error"></span>
      </label>
      <label className="modal__label">
        Password
        <input
          id="password"
          required
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          className="modal__input"
          placeholder="Password"
          minLength="2"
          maxLength="16"
        />
        <span className="modal__error"></span>
      </label>
      <div className="modal__submit-container">
      <button type="submit" className="modal__submit-button">
             Log in
            </button>
        <button
          type="button"
          className="modal__option-button"
          onClick={handleOpenRegisterModal}
        >
          or Register
        </button>
     </div>
    </ModalWithForm>
  );
};

export default LoginModal;
