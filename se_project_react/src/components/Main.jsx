import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/itemCard/itemCard.css";
import "../blocks/main/main.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const Main = ({ weatherTemp, onSelectCard, clothingItems, onCardLike }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit];

  const getWeatherType = () => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else {
        return "cold";
      }
    }
    if (currentTemperatureUnit === "C") {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 19 && temp <= 30) {
        return "warm";
      } else {
        return "cold";
      }
    }
  };

  const weatherType = getWeatherType();

  if (!weatherTemp) {
    return <p>Loading...</p>;
  }

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
        type="sunny"
        weatherTemp={temp}
        temperature={currentTemperatureUnit}
      />
      <section className="main__section" _id="card">
        <h2 className="main__title">
          Today is {temp + "°" + currentTemperatureUnit} / You may want to wear:
        </h2>
        <div className="main__items">
          {filteredCards.map((item, _id) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
                onCardLike={onCardLike}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Main;
