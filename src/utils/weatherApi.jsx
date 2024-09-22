import { checkResponse } from "./utils";
import { weatherOptions } from "./constants";

const lat = 33.0198;
const lon = -96.6989;
const APIkey = "209200beaee4d83b0d302dc8b8621a4a";
export const getForcastWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
  )
    .then(checkResponse)
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(`Failed to fetch weather data: ${err}`);
      throw err;
    });
};

export const parseWeatherData = (weatherData) => {
  if (!weatherData || !weatherData.main || !weatherData.weather) {
    console.log("Invalid weather data structure:", weatherData);
    return null;
  }

  console.log("Raw weather data:", weatherData);

  const currentTime = weatherData.dt;
  const sunrise = weatherData.sys.sunrise;
  const sunset = weatherData.sys.sunset;

  if (currentTime >= sunrise && currentTime <= sunset) {
    console.log("It's daytime");
  } else {
    console.log("It's nighttime");
  }

  const isDay = weatherData.weather[0].icon.includes("d");
  const mapWeatherType = (main) => {
    switch (main.toLowerCase()) {
      case "clear":
        return isDay ? "sunny" : "moon";
      case "clouds":
        return "cloudy";
      case "rain":
        return "rainy";
      case "thunderstorm":
        return "storm";
      case "snow":
        return "snow";
      case "fog":
      case "mist":
      case "haze":
      case "smoke":
        return "fog";
      default:
        return isDay ? "sunny" : "moon"; // Handle unexpected weather types
    }
  };
  const weatherType = mapWeatherType(weatherData.weather[0].main.toLowerCase());
  const tempKelvin = weatherData.main.temp;

  const weatherOption = weatherOptions.find((option) => {
    return option.day === isDay && option.type === weatherType;
  });

  const imageSrcUrl = weatherOption
    ? weatherOption.url
    : `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  const weather = {
    temperature: {
      C: Math.round(tempKelvin - 273.15),
      F: Math.round(((tempKelvin - 273.15) * 9) / 5 + 32),
    },
    isDay,
    weatherType,
    imageSrcUrl,
  };
  console.log("Parsed weather data:", weather);
  return weather;
};
