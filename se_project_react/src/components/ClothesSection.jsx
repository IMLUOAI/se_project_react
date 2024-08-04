import React, { useContext } from "react";
import "../blocks/clothesSection/clothesSection.css";
import ItemCard from "./ItemCard";
import CurrentUserContext from "../contexts/CurrentUserContext";


const ClothesSection = ({ clothingItems, onCreateModal, onSelectCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="clothesSection">
      <div className="clothesSection__header">
        <h3 className="clothesSection__name">Your items</h3>
        <button
          className="clothesSection__add-button"
          type="button"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      <div className="clothesSection__clothing-items">
        {clothingItems
          .filter((item) => item.owner === currentUser._id)
          .map((item) => (
            <ItemCard key={item._id} item={item} onSelectCard={onSelectCard}  onCardLike={onCardLike}/>
          ))}
      </div>
    </div>
  );
};

export default ClothesSection;
