import { checkResponse } from "./utils";

const latitude = 33.02;
const longitude = 96.7;
const APIkey = "a313c01e4bd951f91080f60dcd8c193e";
export const getForcastWeather = () => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
`)
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
  const main = weatherData.main;
  const temperature = main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  console.log(weather);
  return weather;
};
