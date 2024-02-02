import "../blocks/header/header.css";

const header = () => {
  console.log("header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/logo.svg")} alt="logo" />
        </div>
        <div className="header__date">date </div>
      </div>
      <div className="header__avatar-bar">
        <button className="header__add-button" type="text">
          +Add clothes
        </button>
        <div className="header__user-name">name</div>
        <div>
          <img
            className="header__avatar"
            src={require("../images/avatar.svg")}
          />
        </div>
      </div>
    </header>
  );
};

export default header;
