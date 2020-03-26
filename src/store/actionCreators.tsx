export const handleCitySearch = e => {
  return {
    type: "INPUT_CHANGE",
    value: e.target.value
  };
};

export const callAPI = searchedCity => {
  const key = "852bef2232b1fa115bee70b5c83d1bb2";
  const lang = "pl";
  return {
    type: "API_CALL",
    payload: fetch(
      `//api.openweathermap.org/data/2.5/weather?lang=${lang}&q=${searchedCity}&APPID=${key}`,
      { method: "GET" }
    )
      .then(result =>
        result.ok
          ? result.json()
          : alert("Nieprawidłowa nazwa lokalizacji, spróbuj ponownie")
      )
      .then(data => (data !== undefined ? data : undefined))
  };
};

export const cleanInput = () => {
  return {
    type: "CLEAN_INPUT"
  };
};
