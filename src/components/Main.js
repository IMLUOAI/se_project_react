import React, { useMemo, useContext } from "react";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/itemCard/itemCard.css";
import "../blocks/main/main.css";
import { defaultClothingItems } from "../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
const Main = ({ weatherTemp, onSelectCard }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log(currentTemperatureUnit);

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit];
  const weatherType = useMemo(() => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 66) {
      return "cold";
    }
  }, [temp]);

  console.log("weatherType:", weatherType);
  if (!defaultClothingItems) {
    console.error("defaultCloingItems is undefined or null");
    return null;
  }

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });
  console.log(filteredCards);
  return (
    <main className="main">
      <WeatherCard
        day={true}
        type="rainy"
        weatherTemp={temp}
        temperature={currentTemperatureUnit}
      />
      <section className="card__section" id="card-section">
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
