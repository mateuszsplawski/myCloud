import { combineReducers } from "redux";

import homeReducer from "features/home/duck/homeDuck";

export const rootReducer = combineReducers({ home: homeReducer });
