import "../blocks/weatherCard/weatherCard.css";
import { weatherOptions } from "../utils/constants";

const WeatherCard = ({ day, type, weatherTemp }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  const imageSrcUrl = imageSrc.length > 0 ? imageSrc[0].url : "";
  const altText = imageSrc ? `weather: ${type}` : "weather icon";
  return (
    <section className="weather__bar" id="weather">
      <h2 className="weather__info">{weatherTemp}°F</h2>
      <img src={imageSrcUrl} alt={altText} className="weather__image" />
    </section>
  );
};

export default WeatherCard;
