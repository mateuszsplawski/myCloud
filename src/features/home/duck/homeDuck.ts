import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAPIData } from "./../../../api/helpers";

const initialState = {
  userLocation: {},
  weatherDataArray: [],
  fetchingData: false,
};

// ASYNC ACTION CREATOR
export const fetchData = createAsyncThunk(
  "homeReducer/fetchData",
  async (searchedCity: string | undefined) => {
    if (typeof searchedCity !== "string") {
      const response = new Promise<{
        coords: { longitude: number; latitude: number };
      }>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 5000,
        });
      }).then(({ coords }) => fetchAPIData(coords));
      return response;
    } else return fetchAPIData(searchedCity);
  }
);

const homeReducer = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.weatherDataArray = [...state.weatherDataArray, action.payload];
      state.fetchingData = false;
    });
    builder.addCase(fetchData.pending, (state, action) => {
      state.fetchingData = true;
    });
  },
});

export default homeReducer.reducer;
