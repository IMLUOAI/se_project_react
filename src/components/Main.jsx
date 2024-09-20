import React, { useContext } from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/itemCard/itemCard.css";
import "../blocks/main/main.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const Main = ({ weather, onSelectCard, clothingItems, onCardLike }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weather?.temperature?.[currentTemperatureUnit];

  const getWeatherTypeForClothing = () => {
    if (!temp) return null;

    if (currentTemperatureUnit === "F") {
      if (temp >= 80) {
        return "hot";
      } else if (temp >= 66 && temp <= 80) {
        return "warm";
      } else {
        return "cold";
      }
    }
    if (currentTemperatureUnit === "C") {
      if (temp >= 27) {
        return "hot";
      } else if (temp >= 19 && temp <= 27) {
        return "warm";
      } else {
        return "cold";
      }
    }
    return null;
  };

  const clothingWeatherType = getWeatherTypeForClothing();

  if (!temp || !clothingItems) {
    return <p>Loading...</p>;
  }

  const filteredCards = clothingItems.filter((item) => {
    if (!item.weather){
      return false;
    }
    return item.weather.toLowerCase() === clothingWeatherType;
  });

  return (
    <main className="main">
      <WeatherCard
        day={weather?.isDay}
        type={weather?.weatherType}
        weatherTemp={temp}
        imageSrcUrl={weather?.imageSrcUrl}
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
