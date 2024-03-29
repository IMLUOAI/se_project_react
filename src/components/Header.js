import "../blocks/header/header.css";
import headerLogo from "../images/logo.svg";
import headerAvatar from "../images/avatar.svg";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";
import Profile from "./Profile";
const Header = ({ userName, onCreateModal, onCreateProfile }) => {
  console.log("header");
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const cityName = "Plano";
  const dateTimeString = `${currentDate}, ${cityName}`;
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={headerLogo} className="header__logo-image" alt="Logo" />
        </div>
        <h3 className="header__date">{dateTimeString}</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <ToggleSwitch />
      <div className="header__avatar-bar">
        <button
          className="header__add-button"
          type="text"
          onClick={onCreateModal}
        >
          +Add clothes
        </button>
        <h3 className="header__user-name" type="text" onClick={onCreateProfile}>
          {userName}
        </h3>
        <div>
          <img className="header__avatar" src={headerAvatar} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
