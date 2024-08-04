import React, { useState } from "react";
import SideBar from "./SideBar";
import "../blocks/profile/profile.css";
import ClothesSection from "./ClothesSection";
import EditProfileModal from "./EditProfileModal";
import userAvatar from "../images/MyAvatar.jpg";

const Profile = ({
  userName,
  onCreateModal,
  clothingItems,
  onSelectCard,
  onCardLike,
  handleEditProfile,
  onLogout,
}) => {
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);

  const handleOpenEditProfileModal = () => {
    setEditProfileModalOpen(true);
  };

  const handleCloseEditProfileModal = () => {
    setEditProfileModalOpen(false);
  };

  return (
    <div className="profile__section">
      <SideBar
        userName={userName}
        userAvatar={userAvatar}
        onEditProfile={handleOpenEditProfileModal}
        onLogout={onLogout}
      />
      <ClothesSection
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
        onCardLike={onCardLike}
      />
      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        handleCloseModal={handleCloseEditProfileModal}
        handleEditProfile={handleEditProfile}
      />
    </div>
  );
};

export default Profile;
