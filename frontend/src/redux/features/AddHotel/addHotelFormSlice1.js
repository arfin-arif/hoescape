//addHotelFormSlice1.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotelID: "",
  hotelName: "",
  hotelType: "",
};

const addHotelFormSlice1 = createSlice({
  name: "form1",
  initialState,
  reducers: {
    updateForm1Data: (state, action) => {
      // console.log("from slice", action.payload);
      return { ...state, ...action.payload };
    },
  },
});

export const { updateForm1Data } = addHotelFormSlice1.actions;
export const selectFormData = (state) => state.addHotelForm;
export default addHotelFormSlice1.reducer;
