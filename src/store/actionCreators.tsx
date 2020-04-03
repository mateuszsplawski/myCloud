import fetchDataFunc from "../Functions/fetchDataFunc";
import initializeSliderFunc from "../Functions/initializeSliderFunc";
import getGeolocationFunc from "../Functions/getGeolocationFunc";

export const handleCitySearch = e => {
  return {
    type: "INPUT_CHANGE",
    value: e.target.value
  };
};

export const sliderInit = () => {
  initializeSliderFunc();
  return {
    type: "SLIDER_INIT"
  };
};

export const storeUserLocation = () => {
  return {
    type: "STORE_USER_LOCATION",
    payload: getGeolocationFunc().then(data => data.coords)
  };
};

export const updateSearchedCityList = searchedCity => {
  return {
    type: "SEARCHEDCITY_LIST_UPDATE",
    searchedCity: searchedCity
  };
};

export const cleanInput = () => {
  return {
    type: "CLEAN_INPUT"
  };
};

export const callAPI = (searchedCity, userLocation) => {
  return {
    type: "API_CALL",
    payload: fetchDataFunc(searchedCity, userLocation)
      .then(res => res)
      .catch(
        err => new Error(`Wystąpił błąd podczas pobierania danych. ${err}`)
      )
  };
};
