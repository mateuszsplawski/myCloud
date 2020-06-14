import { combineReducers } from "redux";

import homeReducer from "home/duck/homeDuck";

export const rootReducer = combineReducers({ home: homeReducer });
