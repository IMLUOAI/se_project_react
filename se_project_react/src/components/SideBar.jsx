import React from "react";
import "../blocks/sideBar/sideBar.css";

const SideBar = ({ userName, userAvatar, onEditProfile, onLogout }) => {
  return (
    <div className="sideBar__section">
      <img src={userAvatar} className="sideBar__avatar" alt="avatar" />
      <h3 className="sideBar__user-name">{userName}</h3>
      <button
        type="button"
        className="sideBar__profile-button"
        onClick={onEditProfile}
      >
        Change profile data
      </button>
      <button
        type="button"
        className="sideBar__logout-button"
        onClick={onLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default SideBar;
