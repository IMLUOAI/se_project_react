import { checkResponse } from "./utils";

const lat = 33.02;
const lon = -94.7;
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
  console.log(weatherData);

  const tempKelvin = weatherData.main.temp;
  const weather = {
    temperature: {
      C: Math.round(tempKelvin - 273.15),
      F: Math.round(((tempKelvin - 273.15) * 9) / 5 + 32),
    },
  };
  console.log(weather);
  return weather;
};
