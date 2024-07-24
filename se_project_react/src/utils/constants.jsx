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
    coord: {
      lon: 33.02,
      lat: 96.7,
    },
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    base: "stations",
    main: {
      temp: 298.48,
      feels_like: 298.74,
      temp_min: 297.56,
      temp_max: 300.05,
      pressure: 1015,
      humidity: 64,
      sea_level: 1015,
      grnd_level: 933,
    },
    visibility: 10000,
    wind: {
      speed: 0.62,
      deg: 349,
      gust: 1.18,
    },
    rain: {
      "1h": 3.16,
    },
    clouds: {
      all: 100,
    },
    dt: 1661870592,
    sys: {
      type: 2,
      id: 2075663,
      country: "IT",
      sunrise: 1661834187,
      sunset: 1661882248,
    },
    timezone: 7200,
    id: 3163858,
    name: "Zocca",
    cod: 200,
  },
];
