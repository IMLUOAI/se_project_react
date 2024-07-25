import { useState } from "react";
import "../blocks/modalWithForm/modalWithForm.css";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({
  isOpen,
  handleCloseModal,
  handleRegistration,
  handleOpenLoginModal,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
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
    handleRegistration(data);
    console.log("click me ");
  };

  return (
    <ModalWithForm
      buttonText="Next"
      title="Sign up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal_label">
        Email*
        <input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          className="modal_input"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="modal_error"></span>
      </label>
      <label className="modal_label">
        Password*
        <input
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          className="modal_input"
          placeholder="Password"
          minLength="2"
          maxLength="16"
          required
        />
        <span className="modal_error"></span>
      </label>
      <label className="modal_label">
        Name
        <input
          id="name"
          name="name"
          type="text"
          value={data.name}
          onChange={handleChange}
          className="modal_input"
          placeholder="Name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="modal_error"></span>
      </label>
      <label className="modal_label">
        Avatar URL
        <input
          id="avatar-url"
          name="avatarUrl"
          type="text"
          value={data.avatarUrl}
          onChange={handleChange}
          className="modal_input"
          placeholder="Avatar URL"
          minLength="2"
          maxLength=""
          required
        />
        <span className="modal_error"></span>
      </label>
      <div className="modal_submit-container">
        <button
          type="button"
          className="modal__login-button"
          onClick={handleOpenLoginModal}
        >
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
};
export default RegisterModal;
