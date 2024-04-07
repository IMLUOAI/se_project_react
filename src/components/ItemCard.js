import "../blocks/itemCard/itemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  const onCardClick = () => {
    onSelectCard(item);
  };
  return (
    <div className="card__items">
      {/* <div> */}
      <img
        src={item.imageUrl}
        className="card__image"
        onClick={onCardClick}
        alt={item.name}
      />
      {/* </div> */}
      <h3 className="card__name">{item.name}</h3>
    </div>
  );
};

export default ItemCard;
