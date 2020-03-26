import * as actionTypes from "./actions";

interface initialStateInterface {
  searchedCity: string;
  list: Array<Object>;
}

const initialState: initialStateInterface = {
  searchedCity: "",
  list: []
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
        list: action.payload ? [...state.list, action.payload] : [...state.list]
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
    default:
      return state;
  }
};

export default reducer;
