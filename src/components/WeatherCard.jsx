import React, { useContext } from "react";
import "../blocks/weatherCard/weatherCard.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ weatherTemp, day, type, imageSrcUrl }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);


  console.log('WeatherCard Props:', {weatherTemp, day, type, imageSrcUrl });

  return (
    <section className="weather__bar" id="weather">
      <h2 className="weather__info">
      {weatherTemp !== "N/A" ? `${weatherTemp}°${currentTemperatureUnit}` : "N/A"}{" "}
      </h2>
      <img src={imageSrcUrl} alt={`weather: ${type}`} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
