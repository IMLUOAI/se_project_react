import "../blocks/modalWithForm/modalWithForm.css";
import ModalWithForm from "./ModalWithForm";
import useForm from "../hooks/useForm";

const RegisterModal = ({
  isOpen,
  isLoading,
  handleCloseModal,
  handleRegistration,
  handleOpenLoginModal,
}) => {
  const { values, handleChange, errors } = useForm({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({
      email: values.email,
      password: values.password,
      name: values.name,
      avatar: values.avatar,
    });
  };

  return (
    <ModalWithForm
      title="Sign up"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email*
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className="modal__input"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          required
        />
       {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password*
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          className="modal__input"
          placeholder="Password"
          minLength="2"
          maxLength="16"
          required
        />
        {errors.password && <span className="modal__error">{errors.password}</span>}
      </label>
      <label className="modal__label">
        Name
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className="modal__input"
          placeholder="Name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="modal__error"></span>
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          id="avatar"
          name="avatar"
          type="text"
          value={values.avatar}
          onChange={handleChange}
          className="modal__input"
          placeholder="Avatar URL"
          minLength="2"
          maxLength=""
          required
        />
        <span className="modal__error"></span>
      </label>
      <div className="modal__submit-container">
        <button type="submit" className="modal__submit-button">
          {isLoading ? "Next..." : "Next"}
        </button>
        <button
          type="button"
          className="modal__option-button"
          onClick={handleOpenLoginModal}
        >
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
};
export default RegisterModal;
