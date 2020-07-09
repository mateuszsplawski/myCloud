import { getGeolocation } from "./../helpers";
import { setErrorStatus } from "features/modal/duck/modalDuck";
import {
  createSlice,
  createAsyncThunk,
  ThunkDispatch,
  AnyAction,
} from "@reduxjs/toolkit";

import { fetchAPIData } from "./../../../api/helpers";

const initialState = {
  userLocation: {},
  weatherDataArray: [],
  fetchingData: false,
};

// ASYNC ACTION CREATOR
export const fetchData = createAsyncThunk(
  "homeReducer/fetchData",
  async (
    searchedCity: string | undefined,
    thunkAPI: {
      dispatch: ThunkDispatch<any, any, AnyAction>;
      getState: () => any;
    }
  ) => {
    const { dispatch, getState } = thunkAPI;
    const nameArray = getState().home.weatherDataArray.map(
      (weatherDataItem) => weatherDataItem.name
    );

    if (typeof searchedCity !== "string") {
      getGeolocation().then((data) =>
        dispatch(
          setUserLocation({
            lat: data[0].coord.lat,
            lon: data[0].coord.lon,
            name: data[0].name,
          })
        )
      );
      return getGeolocation();
    } else
      return fetchAPIData(searchedCity).then((data) => {
        if (data[0].cod === 200 && nameArray.includes(data[0].name)) {
          dispatch(
            setErrorStatus({
              status: true,
              message: "Szukane miasto jest już na liście.",
            })
          );
          return undefined;
        } else if (data[0].cod === 200) {
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
    setUserLocation: (state, action) => {
      state.userLocation = action.payload;
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

export const {
  setFavourite,
  removeItem,
  setUserLocation,
} = homeReducer.actions;

export default homeReducer.reducer;
