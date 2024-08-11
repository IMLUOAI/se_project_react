import React, { useContext } from "react";
import "../blocks/itemCard/itemCard.css";
import CurrentUserContext from "../contexts/CurrentUserContext";
import heartHollow from "../images/heartHollow.png";
import heartSolid from "../images/heartSolid.png";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser } = useContext(CurrentUserContext);

  if (!item) {
    return null;
  }
  const isLiked =
    Array.isArray(item.likes) &&
    item.likes.some((id) => id === currentUser?._id);
  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_liked" : "card__like-button"
  }`;

  return (
    <div className="card__item">
      <img
        src={item.imageUrl}
        className="card__image"
        alt={item.name}
        onClick={() => onSelectCard(item)}
      />
      <div className="card__description">
        <h2 className="card__name">{item.name}</h2>
        <button
          type="button"
          className={itemLikeButtonClassName}
          onClick={() => onCardLike(item)}
        >
          <img
            src={isLiked ? heartSolid : heartHollow}
            alt="Like"
            className="card__like-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
