import "../blocks/confirmationModal/confirmationModal.css";

const ConfirmationModal = ({
  confirmation,
  onConfirmDelete,
  onCancel,
  onClose,
}) => {
  return (
    <div className={`modal modal_type_${confirmation}`}>
      <div className="modal__confirmation-container">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__confirmation-content">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h3>
        <button
          className="modal__confirmation-button"
          type="button"
          onClick={onConfirmDelete}
        >
          'Yes, delete item
        </button>
        <button
          className="modal__cancel-button"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
