import "../blocks/header/header.css";
import headerLogo from "../images/logo.svg";
import headerAvatar from "../images/avatar.svg";
const Header = ({ onCreateModal }) => {
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
      <div className="header__avatar-bar">
        <button
          className="header__add-button"
          type="text"
          onClick={onCreateModal}
        >
          +Add clothes
        </button>
        <h3 className="header__user-name">name</h3>
        <div>
          <img className="header__avatar" src={headerAvatar} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
