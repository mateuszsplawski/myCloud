import fetchDataFunc from "../Functions/fetchDataFunc";
import initializeSliderFunc from "../Functions/initializeSliderFunc";

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

export const callAPI = searchedCity => {
  return {
    type: "API_CALL",
    payload: fetchDataFunc(searchedCity)
      .then(res => res)
      .catch(
        err => new Error(`Wystąpił błąd podczas pobierania danych. ${err}`)
      )
  };
};
