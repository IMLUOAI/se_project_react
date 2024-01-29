import "../blocks/app/app.css";
function App() {
  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <div>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="header__date">January 27th, Plano </div>
        </div>
        <div className="header__avatar-logo">
          <button className="header__add-button" type="text">
            +Add clothes
          </button>
          <div className="header__user-name">Samuel Luo</div>
          <div>
            <img src="/images/avatar.svg" alt="avatar" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
