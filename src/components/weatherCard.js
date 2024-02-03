
import "../blocks/weatherCard/weatherCard.css";

const weatherOptions = [
  { url: require("../images/day/Sunny.svg").default, day: true, type: "sunny" },
  { url: require("../images/day/Cloudy.svg").default, day: true, type: "cloudy" },
  { url: require("../images/day/Rainy.svg").default, day: true, type: "rainy" },
  { url: require("../images/day/Storm.svg").default, day: true, type: "storm" },
  { url: require("../images/day/Snow.svg").default, day: true, type: "snow" },
  { url: require("../images/day/Fog.svg").default, day: true, type: "fog" },
  {
    url: require("../images/night/Cloudy night.svg").default,
    night: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/Moon night.svg").default,
    night: false,
    type: "moon",
  },
  {
    url: require("../images/night/Rainy night.svg").default,
    night: false,
    type: "rainy",
  },
  {
    url: require("../images/night/Storm night.svg").default,
    night: false,
    type: "storm",
  },
  { url: require("../images/night/Snow night.svg").default, night: false, type: "snow" },
  { url: require("../images/night/Fog night.svg").default, night: false, type: "fog" },
];

const WeatherCard = ({ day, type, weatherTemp }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);

    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc[0]?.url || "";

  return (
    <section className="weather__bar" id="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img src={imageSrcUrl} alt="weather" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
