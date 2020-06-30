import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  errorMessage: "",
};

const modalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    setErrorStatus: (state, action) => {
      state.error = action.payload.status;
      action.payload.message
        ? (state.errorMessage = action.payload.message)
        : (state.errorMessage = "");
    },
  },
});

export const { setErrorStatus } = modalReducer.actions;

export default modalReducer.reducer;
