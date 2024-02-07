import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import "../blocks/app/app.css";
import ModalWithForm from "../components/modalWithForm";
import ItemModal from "../components/itemModal";
function App() {
  const weatherTemp = "30°F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {});

  return (
    <div className="page__section">
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={weatherTemp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New garment" onClose={handleCloseModal}>
          <label className="modal__label">
            Name
            <input
              type="text"
              name="name"
              className="modal__input"
              id="profile-name-input"
              placeholder="Name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="modal__error"></span>
          </label>
          <label className="modal__label">
            Image
            <input
              type="text"
              name="name"
              className="modal__input"
              id="profile-name-input"
              placeholder="Image URL"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="modal__error"></span>
          </label>
          <p className="modal__weather">Select the weather type:</p>
          <div className="modal__weather-type">
            <div>
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
