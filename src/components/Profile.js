import React, { useState } from "react";
import SideBar from "./SideBar";
import "../blocks/profile/profile.css";
import ClothesSection from "./ClothesSection";
import AddItemModal from "../addItemModal/AddItemModal";
const Profile = ({ userName}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCreateModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="profile__section">
      <SideBar userName={userName} />

      <ClothesSection onCreateModal={handleCreateModal} />
      {isModalOpen && (
        <AddItemModal
          isOpen={isModalOpen}
          onCloseModal={handleCloseModal}
          onAddItem={(value) => {
            console.log(value);
            handleCloseModal();
          }}
        />
      )}
    </div>
  );
};

export default Profile;
