import "../blocks/itemModal/itemModal.css";
const ItemModal = ({ selectedCard, onClose, preview, onDelete }) => {
  const handleDelete = () => {
    onDelete(selectedCard._id);
    onClose();
  };
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
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <h3 className="modal__preview-name">{selectedCard.name}</h3>
        <button
          className="modal__delete-button"
          type="button"
          onClick={handleDelete}
        >
          Delete item
        </button>
        <p className="modal__preview-weather">Weather:{selectedCard.weather}</p>
      </div>
    </div>
  );
};

export default ItemModal;
