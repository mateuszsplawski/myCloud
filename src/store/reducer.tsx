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
