type coords = { latitude: number; longitude: number };

export const fetchAPIData = (searchedCity: string | coords) => {
  // KEYS
  const weatherKey = process.env.REACT_APP_WEATHER_KEY;
  const airPollutionKey = process.env.REACT_APP_AIR_POLLUTION_KEY;

  // LANGUAGE
  const lang = "pl";

  // SEARCHED TYPES
  const searchedTypeWeather =
    typeof searchedCity !== "string"
      ? `&lat=${searchedCity.latitude}&lon=${searchedCity.longitude}`
      : `&q=${searchedCity}`;
  const searchedTypeAir =
    typeof searchedCity !== "string"
      ? `geo:${searchedCity.latitude};${searchedCity.longitude}`
      : `${searchedCity}`;

  // WEATHER FETCH
  const weatherData = fetch(
    `//api.openweathermap.org/data/2.5/weather?lang=${lang}${searchedTypeWeather}&APPID=${weatherKey}`,
    { method: "GET" }
  )
    .then((res) => res.json())
    .catch(
      (err) => new Error(`Nie udało się pobrać danych o pogodzie. ${err}`)
    );

  // FORECAST FETCH
  const forecastData = fetch(
    `//api.openweathermap.org/data/2.5/forecast?lang=${lang}${searchedTypeWeather}&APPID=${weatherKey}`,
    { method: "GET" }
  )
    .then((res) => res.json())
    .catch(
      (err) =>
        new Error(
          `Nie udało się pobrać danych o przywidywanej pogodzie na 5 kolejnych dni. ${err}`
        )
    );

  // AIR POLLUTION FETCH
  const airPollutionData = fetch(
    `https://api.waqi.info/feed/${searchedTypeAir}/?token=${airPollutionKey}`,
    { method: "GET" }
  )
    .then((res) => res.json())
    .catch(
      (err) =>
        new Error(`Nie udało się pobrać danych o jakości powietrza. ${err}`)
    );

  return Promise.all([weatherData, forecastData, airPollutionData]);
};
