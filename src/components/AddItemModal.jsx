import "../blocks/modalWithForm/modalWithForm.css";
import ModalWithForm from "./ModalWithForm";
import useForm from "../hooks/useForm";

const AddItemModal = ({ isOpen, onAddItem, handleCloseModal, isLoading }) => {
  const { values, handleChange } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({
      name: values.name,
      imageUrl: values.imageUrl,
      weather: values.weather,
    });
  };

  return (
    <ModalWithForm
      buttonText="Add garment"
      title="New garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="modal__input"
          id="profile-name-input"
          placeholder="Garment Name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="modal__error"></span>
      </label>
      <label className="modal__label">
        Image
        <input
          type="text"
          value={values.imageUrl}
          onChange={handleChange}
          name="imageUrl"
          className="modal__input"
          id="profile-Url-input"
          placeholder="Image URL"
          minLength="2"
          maxLength=""
          required
        />
        <span className="modal__error"></span>
      </label>
      <div className="modal__weather-type">
        <p className="modal__weather-title">Select the weather type:</p>
        <div>
          <input
            type="radio"
            name="weather"
            id="hot"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
          />
          <label htmlFor="hot">Hot</label>
        </div>
        <div>
          <input
            type="radio"
            name="weather"
            id="cold"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          <label htmlFor="cold">Cold</label>
        </div>
        <div>
          <input
            type="radio"
            name="weather"
            id="warm"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          <label htmlFor="warm">Warm</label>
        </div>
      </div>
      <button type="submit" className="modal__submit-button_profile">
        {isLoading ? "Adding..." : "Add garment"}
      </button>
    </ModalWithForm>
  );
};

export default AddItemModal;
