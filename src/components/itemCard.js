import "../blocks/itemCard/itemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div className="card__items">
      <div>
        <img src={item.link} className="card__image" alt="" />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
