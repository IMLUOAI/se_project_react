import React, { useContext } from "react";
import "../blocks/weatherCard/weatherCard.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { weatherOptions } from "../utils/constants";

const WeatherCard = ({ weatherTemp="N/A", day, type="" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log("weatehr card");
  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type === type;
  });

  const imageSrcUrl = weatherOption ? weatherOption.url : "";
  const altText = weatherOption ? `weather: ${type}` : "weather icon";
  return (
    <section className="weather__bar" id="weather">
      <h2 className="weather__info">
        {weatherTemp}°{currentTemperatureUnit}{" "}
      </h2>
      <img src={imageSrcUrl} alt={altText} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
