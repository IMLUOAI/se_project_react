import React from "react";

import "../blocks/weatherCard/weatherCard.css";

const weatherOptions = [
  { url: require("../images/day/Sunny.svg"), day: true, type: "sunny" },
  { url: require("../images/day/Cloudy.svg"), day: true, type: "cloudy" },
  { url: require("../images/day/Rainy.svg"), day: true, type: "rainy" },
  { url: require("../images/day/Storm.svg"), day: true, type: "storm" },
  { url: require("../images/day/Snow.svg"), day: true, type: "snow" },
  { url: require("../images/day/Fog.svg"), day: true, type: "fog" },
  {
    url: require("../images/night/Cloudy night.svg"),
    night: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/Moon night.svg"),
    night: false,
    type: "moon",
  },
  {
    url: require("../images/night/Rainy night.svg"),
    night: true,
    type: "rainy",
  },
  {
    url: require("../images/night/Storm night.svg"),
    night: true,
    type: "storm",
  },
  { url: require("../images/night/Snow night.svg"), night: true, type: "snow" },
  { url: require("../images/night/Fog night.svg"), night: true, type: "fog" },
];

const weatherCard = ({ day, type, weatherTemp }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);

    return i.day === day && i.type === type && i.weatherTemp === weatherTemp;
  });

  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather__bar" id="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img src={imageSrcUrl} alt="weather" className="weather__image" />
    </section>
  );
};

export default weatherCard;
