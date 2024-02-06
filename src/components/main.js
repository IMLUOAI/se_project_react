import WeatherCard from "../components/weatherCard";
import ItemCard from "../components/itemCard";
import "../blocks/itemCard/itemCard.css";
import "../blocks/main/main.css";
import { defaultClothingItems } from "../utils/constants";

const main = ({ weatherTemp, onSelectedCard }) => {
  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        <div className="card__items-title">
          Today is {weatherTemp} / You may want to wear:
        </div>
        <div className="card__items">
          {defaultClothingItems.map((item) => {
            return <ItemCard item={item} onSelectedCard={onSelectedCard} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default main;
