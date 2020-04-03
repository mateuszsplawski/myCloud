interface fetchDataFuncInterface {
  searchedCity: String;
}

const fetchDataFunc: Function = (searchedCity, userLocation) => {
  // KEYS
  const weatherKey = "852bef2232b1fa115bee70b5c83d1bb2";
  const airPollutionKey = "2a7ad43ceffccfbc61ddb362d481ed3b9f1dfcdb";

  // LANGUAGE
  const lang = "pl";

  // SEARCHED TYPES
  const searchedTypeWeather =
    searchedCity === null
      ? `&lat=${userLocation.latitude}&lon=${userLocation.longitude}`
      : `&q=${searchedCity}`;
  const searchedTypeAir =
    searchedCity === null
      ? `geo:${userLocation.latitude};${userLocation.longitude}`
      : `${searchedCity}`;

  // WEATHER FETCH FUNCTIONS
  const weatherData = fetch(
    `//api.openweathermap.org/data/2.5/weather?lang=${lang}${searchedTypeWeather}&APPID=${weatherKey}`,
    { method: "GET" }
  )
    .then(res => res.json())
    .catch(err => new Error(`Nie udało się pobrać danych o pogodzie. ${err}`));

  const forecastData = fetch(
    `//api.openweathermap.org/data/2.5/forecast?lang=${lang}${searchedTypeWeather}&APPID=${weatherKey}`,
    { method: "GET" }
  )
    .then(res => res.json())
    .catch(
      err =>
        new Error(
          `Nie udało się pobrać danych o przywidywanej pogodzie na 5 kolejnych dni. ${err}`
        )
    );

  // AIR FETCH FUNCTION
  const airPollutionData = fetch(
    `https://api.waqi.info/feed/${searchedTypeAir}/?token=${airPollutionKey}`,
    { method: "GET" }
  )
    .then(res => res.json())
    .catch(
      err =>
        new Error(`Nie udało się pobrać danych o jakości powietrza. ${err}`)
    );

  // PROMISE RETURN TO BE RESOLVED WITH REDUX MIDDLEWARE
  return Promise.all([weatherData, forecastData, airPollutionData]);
};

export default fetchDataFunc;
