//ratingAndServiceSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serviceDetails: "",
  ratings: 0,
  image: [],
};

const ratingsSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {
    updateRatings: (state, action) => {
      console.log("rating slice", action.payload);
      return { ...state, ...action.payload };
    },
  },
});

export const { updateRatings } = ratingsSlice.actions;
export const selectRatingData = (state) => state.rating;
export default ratingsSlice.reducer;
