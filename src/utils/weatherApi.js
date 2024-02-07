https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}


const latitude = 33.0198
const longtitude = 96.6989
const APIkey = "a313c01e4bd951f91080f60dcd8c193e";
const getForcastWeather = () => {
  const weatherApi = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
`).then(res => {
    console.log(res);
    if(res.ok) {
        return res.json();
    } else {
        return Promise.reject(`Error.${res.status}`);
    }
  });
  return weatherApi;
};
