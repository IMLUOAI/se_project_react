import "../blocks/weatherCard/weatherCard.css";
import { weatherOptions } from "../utils/constants";

const WeatherCard = ({ day, type, weatherTemp }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);

    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather__bar" id="weather">
      <div className="weather__info">{weatherTemp}°F</div>
      <img src={imageSrcUrl} alt="weather" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
