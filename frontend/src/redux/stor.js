//stor.js

import { configureStore } from "@reduxjs/toolkit";
import addHotelFormSlice1 from "./features/AddHotel/addHotelFormSlice1";
import detailsInputSlice from "./features/AddHotel/detailsInputSlice";
import ratingsSlice from "./features/AddHotel/ratingAndServiceSlice";

const store = configureStore({
  reducer: {
    form1: addHotelFormSlice1,
    form2: detailsInputSlice, // Add the detailsInput slice here
    // rating: ratingsSlice,
  },
});

const RootState = store.getState;
const AppDispatch = store.dispatch;

export { RootState, AppDispatch };
export default store;
