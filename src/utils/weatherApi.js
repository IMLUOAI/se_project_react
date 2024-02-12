const latitude = 33.02;
const longitude = 96.7;
const APIkey = "a313c01e4bd951f91080f60dcd8c193e";
export const getForcastWeather = () => {
  const weatherApi =
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
`)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Error.${res.status}`);
        }
      })
      .catch((err) => {
        console.err(err);
        return Promise.reject("Error fetching weather data");
      });
  return weatherApi;
};

export const parseWeatherData = (weatherData) => {
  const main = weatherData.main;
  console.log(main);
  const temperature = weatherData.main.temp;
  console.log(temperature);
  return Math.ceil(temperature);
};
