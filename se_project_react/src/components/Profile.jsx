import React, { useState } from "react";
import SideBar from "./SideBar";
import "../blocks/profile/profile.css";
import ClothesSection from "./ClothesSection";
import EditProfileModal from "./EditProfileModal";
import userAvatar from "../images/MyAvatar.jpg";

const Profile = ({ userName, onCreateModal, clothingItems, onSelectCard, handleEditProfile }) => {
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);

   const handleOpenEditProfileModal = () => {
    setEditProfileModalOpen(true);
   }

   const handleCloseEditProfileModal = () => {
    setEditProfileModalOpen(false);
   }

   const handleLogout = () => {
    console.log("User logged out");
   }

  return (
    <div className="profile__section">
      <SideBar 
      userName={userName} 
      userAvatar={userAvatar}
      onEditProfile={handleOpenEditProfileModal}
      onLogout={handleLogout}
      />
      <ClothesSection
        onCreateModal={onCreateModal}
        clothingItems={clothingItems}
        onSelectCard={onSelectCard}
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
