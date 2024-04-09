import "../blocks/header/header.css";
import headerLogo from "../images/logo.svg";
import headerAvatar from "../images/MyAvatar.jpg";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";
const Header = ({ userName, onCreateModal, handleProfileClick }) => {
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
          <Link to="/">
            <img src={headerLogo} className="header__logo-image" alt="Logo" />
          </Link>
        </div>
        <h3 className="header__date">{dateTimeString}</h3>
      </div>

      <ToggleSwitch />
      <div className="header__avatar-bar">
        <button
          className="header__add-button"
          type="text"
          onClick={onCreateModal}
        >
          +Add clothes
        </button>
        <Link to="/profile" className="header__link">
          <h3 className="header__user-name" onClick={handleProfileClick}>
            {userName}
          </h3>
          <img className="header__avatar" src={headerAvatar} alt="Avatar" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
