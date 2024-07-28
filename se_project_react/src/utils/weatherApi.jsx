import { checkResponse } from "./utils";

const lat = 33.02;
const lon = 94.7;
const APIkey = "209200beaee4d83b0d302dc8b8621a4a";
export const getForcastWeather = () => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`)

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
  const { temp } = weatherData.main;
  const weather = {
    temperature: {
      F: Math.round(temp),
      C: Math.round(((temp - 32) * 5) / 9),
    },
  };
  console.log(weather);
  return weather;
};
