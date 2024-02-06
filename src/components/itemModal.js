import "../blocks/itemModal/itemModal.css";

const itemModal = ({ selectedCard }) => {
  console.log("Nancy's pussy is crying");
  return (
    <div className="modal modal_type">
      <div className="modal__content">
        <img src={selectedCard.link} alt="preview card" />
        <div>{selectedCard.name}</div>
        <div>weather type:{selectedCard}</div>
      </div>
    </div>
  );
};

export default itemModal;
