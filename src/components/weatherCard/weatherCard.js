import weatherCard from "../blocks/weatherCard";

const weatherOptions = [
  { url: "./images/day/Sunny.svg", day: true, type: "sunny" },
  { url: "./images/day/Cloudy.svg", day: true, type: "cloudy" },
  { url: "./images/day/Rainy.svg", day: true, type: "rainy" },
  { url: "./images/day/Storm.svg", day: true, type: "storm" },
  { url: "./images/day/Snow.svg", day: true, type: "snow" },
  { url: "./images/day/Fog.svg", day: true, type: "fog" },
  { url: "./images/night/Cloudy night.svg", night: false, type: "cloudy" },
  { url: "./images/night/Moon night.svg", night: false, type: "moon" },
  { url: "./images/night/Rainy night.svg", night: true, type: "rainy" },
  { url: "./images/night/Storm night.svg", night: true, type: "storm" },
  { url: "./images/night/Snow night.svg", night: true, type: "snow" },
  { url: "./images/night/Fog night.svg", night: true, type: "fog" },
];

const weatherCard = () => {
  console.log("weatherCard");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);

    return i.day === day && i.type === type;
  });

  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather-bar" id="weather">
      <div className="weather__info">75°F</div>
      <img src={imageSrcUrl} alt="weather bar" />
    </section>
  );
};

export default weatherCard;
