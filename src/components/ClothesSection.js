import React from "react";
import "../blocks/clothesSection/clothesSection.css";
const ClothesSection = ({ clothingItems, onCreateModal }) => {
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
      {clothingItems &&
        clothingItems.map((item) => (
          <div key={item._id} className="clothesSection__clothing-item">
            <img
              className="clothesSection__item-image"
              src={item.link}
              alt={item.name}
            />
            <p className="clothesSection__item-name">{item.name}</p>
          </div>
        ))}
    </div>
  );
};

export default ClothesSection;
