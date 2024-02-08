const latitude = 10.99;
const longitude = 44.34;
const APIkey = "a313c01e4bd951f91080f60dcd8c193e";
export const getForcastWeather = () => {
  const weatherApi =
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
`).then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error.${res.status}`);
      }
    });
  return weatherApi;
};

export const ParseWeatherData = (weatherData) => {
  const main = weatherData.main;
  console.log(main);
  const temperature = weatherData.main.temp;
  console.log(temperature);
  return Math.ceil(temperature);
};
