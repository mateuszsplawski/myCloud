export const handleCitySearch = e => {
  return {
    type: "INPUT_CHANGE",
    value: e.target.value
  };
};

export const cleanInput = () => {
  return {
    type: "CLEAN_INPUT"
  };
};

export const callAPI = searchedCity => {
  const weatherKey = "852bef2232b1fa115bee70b5c83d1bb2";
  const airPollutionKey = "2a7ad43ceffccfbc61ddb362d481ed3b9f1dfcdb";
  const lang = "pl";

  const weatherData = fetch(
    `//api.openweathermap.org/data/2.5/weather?lang=${lang}&q=${searchedCity}&APPID=${weatherKey}`,
    { method: "GET" }
  )
    .then(res => res.json())
    .catch(err => new Error(`Nie udało się pobrać danych o pogodzie. ${err}`));

  const forecastData = fetch(
    `//api.openweathermap.org/data/2.5/forecast?lang=${lang}&q=${searchedCity}&APPID=${weatherKey}`,
    { method: "GET" }
  )
    .then(res => res.json())
    .catch(
      err =>
        new Error(
          `Nie udało się pobrać danych o przywidywanej pogodzie na 5 kolejnych dni. ${err}`
        )
    );

  const airPollutionData = fetch(
    `https://api.waqi.info/feed/${searchedCity}/?token=${airPollutionKey}`,
    { method: "GET" }
  )
    .then(res => res.json())
    .catch(
      err =>
        new Error(`Nie udało się pobrać danych o jakości powietrza. ${err}`)
    );

  return {
    type: "API_CALL",
    payload: Promise.all([weatherData, forecastData, airPollutionData])
      .then(res => res)
      .catch(
        err => new Error(`Wystąpił błąd podczas pobierania danych. ${err}`)
      )
  };
};
