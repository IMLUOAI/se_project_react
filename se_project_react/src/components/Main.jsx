import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/itemCard/itemCard.css";
import "../blocks/main/main.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { weatherData } from "../utils/constants";

const Main = ({ weatherTemp, onSelectCard, clothingItems, onCardLike }) => {
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
  
  const getCurrentDayStatus = () => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18;
  }

  const weatherType = getWeatherType(temp);
  const isDay = getCurrentDayStatus();
  
  if (!weatherData) {
    return <p>Loading...</p>
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
        day={isDay}
        type={weatherType}
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
