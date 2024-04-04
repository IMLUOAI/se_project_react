import React from "react";
import "../blocks/sideBar/sideBar.css";
const SideBar = ({ userName, userAvatar }) => {
  return (
    <div className="sideBar__section">
      <img src={userAvatar} className="sidebar__avatar" alt="avatar" />
      <h3 className="sidebar__user-name">{userName}</h3>
    </div>
  );
};

export default SideBar;
