import "../blocks/modalWithForm/modalWithForm.css";
import ModalWithForm from "./ModalWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext, useEffect } from "react";
import useForm from "../hooks/useForm";

const EditProfileModal = ({
  isOpen,
  handleCloseModal,
  handleEditProfile,
  isLoading,
}) => {
  const { currentUser } = useContext(CurrentUserContext);

  const { values, handleChange, setValues } = useForm({
    name: currentUser?.name || "",
    avatar: currentUser?.avatar || "",
  });

  useEffect(() => {
    if (isOpen && currentUser) {
      setValues({
        name: currentUser?.name || "",
        avatar: currentUser?.avatar || "",
      });
    }
  }, [isOpen, currentUser, setValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProfile(values);
  };

  return (
    <ModalWithForm
      buttonText={"Save changes"}
      title="Change profile data"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name*
        <input
          id="name"
          required
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className="modal__input"
          minLength="2"
          maxLength="40"
        />
        <span className="modal__error"></span>
      </label>
      <label className="modal__label">
        Avatar
        <input
          id="avatar"
          required
          name="avatar"
          type="text"
          value={values.avatar}
          onChange={handleChange}
          className="modal__input"
          minLength="2"
          maxLength=""
        />
        <span className="modal__error"></span>
      </label>
      <button type="submit" className="modal__submit-button_profile">
        {isLoading ? "Adding..." : "Save Changes"}
      </button>
    </ModalWithForm>
  );
};

export default EditProfileModal;
