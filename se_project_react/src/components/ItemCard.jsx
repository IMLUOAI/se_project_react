import React, { useContext } from "react";
import "../blocks/itemCard/itemCard.css";
import CurrentUserContext from "../contexts/CurrentUserContext";
import heartHollow from "../images/heartHollow.png";
import heartSolid from "../images/heartSolid.png";


const ItemCard = ({ item, onCardLike }) => {

const currentUser = useContext(CurrentUserContext);
const isLiked = item.likes.some(id => id === currentUser._id);
const itemLikeButtonClassName = `item-card__like-button ${isLiked ? 'item-card__like-button_liked' : ''}`;

  const handleLike = () => {
    onCardLike(item);
  };

  return (
    <div className="item-card">
      <img
        src={item.imageUrl}
        className="item-card__image"
        alt={item.name}
      />
      <h2 className="item-card__name">{item.name}</h2>
      <button type="button"  className={itemLikeButtonClassName} onClick={handleLike}>
        <img
      src={isLiked ? heartSolid : heartHollow}
      alt="Like"
      className="item-card__like-icon"
      />
      </button>
    </div>
  );
};

export default ItemCard;
