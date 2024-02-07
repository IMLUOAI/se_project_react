import React, { useMemo } from "react";

import WeatherCard from "../components/weatherCard";
import ItemCard from "../components/itemCard";
import "../blocks/itemCard/itemCard.css";
import "../blocks/main/main.css";
import { defaultClothingItems } from "../utils/constants";

const Main = ({ weatherTemp, onSelectCard }) => {
  const weatherType = useMemo(() => {
    if (weatherTemp >= "86°F") {
      return "hot";
    } else if (weatherTemp >= "66°F" && weatherTemp <= "85°F") {
      return "warm";
    } else if (weatherTemp <= "66°F") {
      return "cold";
    }
  }, [weatherTemp]);

  console.log("weatherType:", weatherType);
  if (!defaultClothingItems) {
    console.error("defaultCloingItems is undefined or null");
    return null;
  }

  const filteredCards = defaultClothingItems.filter((item) => {
    console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });
  console.log(filteredCards);
  console.log("where are you?");
  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section className="card__section" id="card-section">
        <div className="card__items-title">
          Today is {weatherTemp} / You may want to wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item) => {
            return <ItemCard item={item} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
