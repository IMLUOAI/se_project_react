import "../blocks/header/header.css";

const header = ({ onCreateModal }) => {
  console.log("header");
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img
            src={require("../images/logo.svg").default}
            className="header__logo-image"
            alt="logo"
          />
        </div>
        <div className="header__date">{currentDate}</div>
      </div>
      <div className="header__avatar-bar">
        <button
          className="header__add-button"
          type="text"
          onClick={onCreateModal}
        >
          +Add clothes
        </button>
        <div className="header__user-name">name</div>
        <div>
          <img
            className="header__avatar"
            src={require("../images/avatar.svg").default}
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default header;
