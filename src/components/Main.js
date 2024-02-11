import React, { useMemo } from "react";

import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/itemCard/itemCard.css";
import "../blocks/main/main.css";
import { defaultClothingItems } from "../utils/constants";

const Main = ({ weatherTemp, onSelectCard }) => {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 66) {
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
          Today is {weatherTemp}°F / You may want to wear:
        </div>
        <div className="card__items">
          {filteredCards.map((item, index) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
