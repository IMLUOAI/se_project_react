import React from "react";
import "../blocks/weatherCard/weatherCard.css";
import { weatherOptions } from "../utils/constants";

const WeatherCard = ({ sunny, type, weatherTemp, temperature }) => {
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === sunny && i.type === type;
  });
  const imageSrcUrl = imageSrc.length > 0 ? imageSrc[0].url : "";
  const altText = imageSrc ? `weather: ${type}` : "weather icon";
  return (
    <section className="weather__bar" id="weather">
      <h2 className="weather__info">{weatherTemp + "°" + temperature}</h2>
      <img src={imageSrcUrl} alt={altText} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
