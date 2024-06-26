import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/itemCard/itemCard.css";
import "../blocks/main/main.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const Main = ({ weatherTemp, onSelectCard, clothingItems }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit];
  const getWeatherType = () => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 66) {
      return "cold";
    }
  };
  const weatherType = getWeatherType();

  if (!clothingItems) {
    console.error("clothingItems is undefined or null");
    return null;
  }
  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        day={true}
        type="rainy"
        weatherTemp={temp}
        temperature={currentTemperatureUnit}
      />
      <section className="card__section" _id="card">
        <h2 className="card__items-title">
          Today is {temp + "°" + currentTemperatureUnit} / You may want to wear:
        </h2>
        <div className="card__items">
          {filteredCards.map((item, _id) => {
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
