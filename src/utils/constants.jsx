export const weatherOptions = [
  { url: require("../images/day/Sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../images/day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/day/Rainy.svg").default, day: true, type: "rainy" },
  { url: require("../images/day/Storm.svg").default, day: true, type: "storm" },
  { url: require("../images/day/Snow.svg").default, day: true, type: "snow" },
  { url: require("../images/day/Fog.svg").default, day: true, type: "fog" },
  {
    url: require("../images/night/Cloudy night.svg").default,
    night: false,
    type: "cloudy",
  },
  {
    url: require("../images/night/Moon night.svg").default,
    night: false,
    type: "moon",
  },
  {
    url: require("../images/night/Rainy night.svg").default,
    night: false,
    type: "rainy",
  },
  {
    url: require("../images/night/Storm night.svg").default,
    night: false,
    type: "storm",
  },
  {
    url: require("../images/night/Snow night.svg").default,
    night: false,
    type: "snow",
  },
  {
    url: require("../images/night/Fog night.svg").default,
    night: false,
    type: "fog",
  },
];

export const weatherData = [

    {
      "coord": {
        "lon": -96.6989,
        "lat": 33.0198
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 295.15,
        "feels_like": 294.32,
        "temp_min": 293.71,
        "temp_max": 296.48,
        "pressure": 1015,
        "humidity": 53
      },
      "visibility": 10000,
      "wind": {
        "speed": 4.63,
        "deg": 180
      },
      "clouds": {
        "all": 0
      },
      "dt": 1641013200,
      "sys": {
        "type": 1,
        "id": 4358,
        "country": "US",
        "sunrise": 1641034225,
        "sunset": 1641071092
      },
      "timezone": -21600,
      "id": 4719457,
      "name": "Plano",
      "cod": 200
    }
];
