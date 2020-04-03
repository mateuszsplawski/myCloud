import * as actionTypes from "./actions";

interface initialStateInterface {
  searchedCity: string;
  list: Array<Object>;
  fetchingData: Boolean;
  searchedCityList: Array<String>;
  sliderInitialized: Boolean;
  userLocation: {};
  fetchingLocationData: boolean;
}

const initialState: initialStateInterface = {
  searchedCity: "",
  list: [],
  fetchingData: false,
  searchedCityList: [],
  sliderInitialized: false,
  userLocation: undefined,
  fetchingLocationData: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        searchedCity: action.value
      };
    case actionTypes.API_CALL_FULFILLED:
      return {
        ...state,
        list: action.payload
          ? [action.payload, ...state.list]
          : [...state.list],
        fetchingData: false
      };
    case actionTypes.API_CALL_PENDING:
      return {
        ...state,
        fetchingData: true
      };
    case actionTypes.API_CALL_REJECTED:
      return alert("Spróbuj ponownie.");
    case actionTypes.WEATHER_SEARCH:
      return {
        ...state,
        list: action.list
      };
    case actionTypes.CLEAN_INPUT:
      return {
        ...state,
        searchedCity: ""
      };

    case actionTypes.SEARCHEDCITY_LIST_UPDATE:
      return {
        ...state,
        searchedCityList: [...state.searchedCityList, action.searchedCity]
      };
    case actionTypes.SLIDER_INIT:
      return {
        ...state,
        sliderInitialized: true
      };
    case actionTypes.STORE_USER_LOCATION_FULFILLED:
      return {
        ...state,
        userLocation: {
          longitude: action.payload.longitude,
          latitude: action.payload.latitude
        },
        fetchingLocationData: true
      };
    default:
      return state;
  }
};

export default reducer;
