import React from "react";
import "../blocks/sideBar/sideBar.css";
const SideBar = ({ userName, userAvatar }) => {
  return (
    <div className="sideBar__section">
      <img src={userAvatar} className="sideBar__avatar" alt="avatar" />
      <h3 className="sideBar__user-name">{userName}</h3>
    </div>
  );
};

export default SideBar;
