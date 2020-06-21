import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSliderMounted: false,
};

const sliderReducer = createSlice({
  name: "sliderReducer",
  initialState,
  reducers: {
    updateSliderStatus: (state, action) => {
      state.isSliderMounted = true;
    },
  },
});

export const { updateSliderStatus } = sliderReducer.actions;

export default sliderReducer.reducer;
