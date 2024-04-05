import React from "react";
import SideBar from "./SideBar";
import "../blocks/profile/profile.css";
import ClothesSection from "./ClothesSection";
const Profile = ({
  userName,
  onCreateModal,
  clothingItems,
  onSelectCard,
  userAvatar,
}) => {
  return (
    <div className="profile__section">
      <SideBar userName={userName} userAvatar={userAvatar} />
      <ClothesSection
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
      />
    </div>
  );
};

export default Profile;
