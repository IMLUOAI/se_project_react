import "../blocks/itemModal/itemModal.css";
const ItemModal = ({ selectedCard, onClose, preview }) => {
  return (
    <div className={`modal modal_type_${preview}`}>
      <div className="modal__preview-container">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="modal__preview-image"
          src={selectedCard.link}
          alt="Garment card"
        />
        <h3 className="modal__preview-name">{selectedCard.name}</h3>
        <p className="modal__preview-weather">Weather:{selectedCard.weather}</p>
      </div>
    </div>
  );
};

export default ItemModal;
