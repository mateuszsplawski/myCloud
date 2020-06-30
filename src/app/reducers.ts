import { combineReducers } from "redux";

import homeReducer from "features/home/duck/homeDuck";
import sliderReducer from "features/slider/duck/sliderDuck";
import searchReducer from "features/search/duck/searchDuck";
import cardReducer from "features/card/duck/cardDuck";
import mainReducer from "features/main/duck/mainDuck";
import navigationReducer from "features/navigation/duck/navigationDuck";
import modalReducer from "features/modal/duck/modalDuck";

export const rootReducer = combineReducers({
  home: homeReducer,
  slider: sliderReducer,
  search: searchReducer,
  card: cardReducer,
  main: mainReducer,
  navigation: navigationReducer,
  modal: modalReducer,
});
