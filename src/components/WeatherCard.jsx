import React, { useContext } from "react";
import "../blocks/weatherCard/weatherCard.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { weatherOptions } from "../utils/constants";

const WeatherCard = ({ weatherTemp="N/A", day, type }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  console.log("weatehr card");

  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type === type;
  });

  const imageSrcUrl = weatherOption
    ? weatherOption.url
    : type === "Clear"
    ? day
      ? "../images/day/Sunny.svg"
      : "../images/night/Moon night.svg"
    : type === "Clouds"
    ? "../images/day/Cloudy.svg"
    : weatherTemp > 80
    ? "../images/day/Sunny.svg"
    : weatherTemp < 66
    ? "../images/day/Snow.svg"
    : "../images/day/Rainy.svg";

  // const imageSrcUrl = weatherOption ? weatherOption.url : "";
  const altText = weatherOption ? `weather: ${type}` : "weather icon";

  console.log('WeatherCard Props:', {weatherTemp, day, type, imageSrcUrl });

  return (
    <section className="weather__bar" id="weather">
      <h2 className="weather__info">
      {weatherTemp !== "N/A" ? `${weatherTemp}°${currentTemperatureUnit}` : "N/A"}{" "}
      </h2>
      <img src={imageSrcUrl} alt={altText} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
