import React from "react";
import userAvatar from "../images/avatar.svg";
const Profile = ({ userName, clothingItems }) => {
  return (
    <div className="profile__section">
      <div className="profile__sidebar-section">
        <img src={userAvatar} className="sidebar_avatar" alt="avatar" />
        <h3 className="sidebar__user-name">{userName}</h3>
      </div>
      <div className="profile__clothes-section">
        {clothingItems.map((item) => (
          <div key={item._id} className="clothing_item">
            <img src={item.link} alt={item.name} />
            <p>{item.name}</p>
            <p>Weather: {item.weather}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
