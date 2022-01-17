import { createSlice } from "@reduxjs/toolkit";

export const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    userID: "",
    isValid: false,
  },
  reducers: {
    addValidation: (state, action) => {
      state.isValid = action.payload.valid;
      state.userID = action.payload.userID;
    },
    clearValidation: (state) => {
      state.isValid = false;
      state.userID = "";
    },
  },
});

export const { addValidation, clearValidation } = reservationSlice.actions;
export default reservationSlice.reducer;
