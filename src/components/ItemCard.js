import "../blocks/itemCard/itemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__items">
      <div>
        <img
          src={item.link}
          className="card__image"
          onClick={() => onSelectCard(item)}
          alt="{item.name}"
        />
      </div>
      <h3 className="card__name">{item.name}</h3>
    </div>
  );
};

export default ItemCard;
