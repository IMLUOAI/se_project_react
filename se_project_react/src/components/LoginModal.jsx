import { Link } from "react-router-dom";
import { useState } from "react";
import "../blocks/modalWithForm/modalWithForm.css";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({ isOpen, handleCloseModal, handleLogin }) => {
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
    buttonText="Log in"
    title="Log in"
    onClose={handleCloseModal}
    isOpen={isOpen}
    onSubmit={handleSubmit}
    >
        <label className="modal_label">
            Email
        <input
          id="email"
          required
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          className="modal_input"
          placeholder="Email"
          minLength="2"
          maxLength="40"
        />
        <span className="modal_error"></span>
        </label>
        <label className="modal_label">
            Password
        <input
          id="password"
          required
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          className="modal_input"
          placeholder="Password"
          minLength="2"
          maxLength="16"
        />
        <span className="modal_error"></span>
        </label>
        <div className="modal__submit-container">
        <Link to="/register" className="modal__register-link">
          or Register
        </Link>
      </div>
    </ModalWithForm>
  );
};

export default LoginModal;
