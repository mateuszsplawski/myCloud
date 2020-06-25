import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  favouriteVisible: false,
};

const navigationReducer = createSlice({
  name: "navigationReducer",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = !state.darkMode;
    },
    setFavouriteVisibility: (state, action) => {
      state.favouriteVisible = !state.favouriteVisible;
    },
  },
});

export const {
  setDarkMode,
  setFavouriteVisibility,
} = navigationReducer.actions;

export default navigationReducer.reducer;
