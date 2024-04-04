import React from "react";
import SideBar from "./SideBar";
import "../blocks/profile/profile.css";
import ClothesSection from "./ClothesSection";
const Profile = ({ userName, onCreateModal, clothingItems }) => {
  return (
    <div className="profile__section">
      <SideBar userName={userName} />
      <ClothesSection
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
      />
    </div>
  );
};

export default Profile;
