import { setErrorStatus } from "features/modal/duck/modalDuck";
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
  async (searchedCity: string | undefined, { dispatch }) => {
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
    } else
      return fetchAPIData(searchedCity).then((data) => {
        if (data[0].cod === 200) {
          return data;
        } else {
          dispatch(
            setErrorStatus({
              status: true,
              message: "Nie udało się pobrać danych, spróbuj ponownie.",
            })
          );
          return undefined;
        }
      });
  }
);

const homeReducer = createSlice({
  name: "homeReducer",
  initialState,
  reducers: {
    setFavourite: (state, action) => {
      const index = state.weatherDataArray
        .map((weatherDataItem) => weatherDataItem.name)
        .indexOf(action.payload);
      state.weatherDataArray[index].favourite = !state.weatherDataArray[index]
        .favourite;
    },
    removeItem: (state, action) => {
      state.weatherDataArray = state.weatherDataArray.filter(
        (weatherDataItem) => weatherDataItem.name !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      if (action.payload) {
        state.weatherDataArray = [
          {
            ...action.payload,
            name: action.payload[0].name,
            id: state.weatherDataArray.length,
            favourite: false,
          },
          ...state.weatherDataArray,
        ];
      }
      state.fetchingData = false;
    });
    builder.addCase(fetchData.pending, (state, action) => {
      state.fetchingData = true;
    });
  },
});

export const { setFavourite, removeItem } = homeReducer.actions;

export default homeReducer.reducer;
