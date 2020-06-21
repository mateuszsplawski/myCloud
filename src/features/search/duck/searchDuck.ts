import { createSlice } from "@reduxjs/toolkit";

import { fetchData } from "./../../home/duck/homeDuck";

const initialState = {
  fetchingData: false,
};

const searchReducer = createSlice({
  name: "searchReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.fetchingData = false;
    });
    builder.addCase(fetchData.pending, (state, action) => {
      state.fetchingData = true;
    });
  },
});

export default searchReducer.reducer;
