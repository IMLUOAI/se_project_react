import "../blocks/header/header.css";
import headerLogo from "../images/logo.svg";
import ToggleSwitch from "./ToggleSwitch";
import PlaceholderAvatar from "./PlaceholderAvatar";
import { Link } from "react-router-dom";

const Header = ({
  userName = "GUEST",
  userAvatar = "",
  onCreateModal,
  handleProfileClick,
  isAuthorized,
  onRegisterModal,
  onLoginModal,
}) => {
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
        {isAuthorized ? (
          <>
            <button
              className="header__add-button"
              type="button"
              onClick={onCreateModal}
            >
              +Add clothes
            </button>
            <Link to="/profile" className="header__link-bar">
              <h3 className="header__user-name">{userName}</h3>
              {userAvatar ? (
                <img className="header__avatar" src={userAvatar} alt="Avatar" />
              ) : (
                <PlaceholderAvatar name={userName} />
              )}
            </Link>
          </>
        ) : (
          <nav className="header__nav-bar">
            <button className="header__register-link" onClick={onRegisterModal}>
              Sign Up
            </button>
            <button className="header__login-link" onClick={onLoginModal}>
              Log In
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
