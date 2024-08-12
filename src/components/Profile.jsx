import React from "react";
import SideBar from "./SideBar";
import "../blocks/profile/profile.css";
import ClothesSection from "./ClothesSection";

const Profile = ({
  userName,
  userAvatar,
  onCreateModal,
  clothingItems,
  onSelectCard,
  onCardLike,
  onEditProfile,
  onLogout,
}) => {

  return (
    <div className="profile__section">
      <SideBar
        userName={userName}
        userAvatar={userAvatar}
        onEditProfile={onEditProfile}
        onLogout={onLogout}
      />
      <ClothesSection
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCardLike={onCardLike}
      />
    </div>
  );
};

export default Profile;
