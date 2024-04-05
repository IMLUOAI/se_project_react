import React from "react";
import "../blocks/clothesSection/clothesSection.css";
import ItemCard from "./ItemCard";
const ClothesSection = ({ clothingItems, onCreateModal, onSelectCard }) => {
  console.log("clothingItems:", clothingItems);
  return (
    <div className="clothesSection">
      <div className="clothesSection__header">
        <h3 className="clothesSection__name">Your items</h3>
        <button
          className="clothesSection__add-button"
          type="text"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      {clothingItems.map((item) => (
        <div key={item._id} className="clothesSection__clothing-item">
          <ItemCard item={item} onSelectCard={onSelectCard} />
        </div>
      ))}
    </div>
  );
};

export default ClothesSection;
