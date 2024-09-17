import "../blocks/modalWithForm/modalWithForm.css";
import ModalWithForm from "./ModalWithForm";
import useForm from "../hooks/useForm";

const LoginModal = ({
  isOpen,
  isLoading,
  handleCloseModal,
  handleLogin,
  handleOpenRegisterModal,
}) => {
  const { values, handleChange, errors } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <ModalWithForm
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
          value={values.email}
          onChange={handleChange}
          className="modal__input"
          placeholder="Email"
          minLength="2"
          maxLength="40"
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password
        <input
          id="password"
          required
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          className="modal__input"
          placeholder="Password"
          minLength="2"
          maxLength="16"
        />
        {errors.password && <span className="modal__error">{errors.password}</span>}
      </label>
      <div className="modal__submit-container">
        <button type="submit" className="modal__submit-button">
          {isLoading ? "Logging..." : "Log in"}
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
