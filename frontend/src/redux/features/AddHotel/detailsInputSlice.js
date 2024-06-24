// const initialState = [
//   // {
//   //   label: "Nome Hotel",
//   //   value: "",
//   // },
//   // {
//   //   label: "Hotel ID",
//   //   value: "",
//   // },
//   // {
//   //   label: "Morgana ID",
//   //   value: "",
//   // },
//   // {
//   //   label: "Sito Web Hotel",
//   //   value: "",
//   //   url: true,
//   // },
//   // {
//   //   label: "Email",
//   //   value: "",
//   // },
//   // {
//   //   label: "Phone Number",
//   //   value: "",
//   //   number: true,
//   // },
//   // {
//   //   label: "Hotel XMLurl",
//   //   value: "",
//   //   url: true,
//   // },
//   // {
//   //   label: "Priorità",
//   //   value: "",
//   // },
//   // { label: "Hotel Description", value: "" },
//   // { label: "Summary Description", value: "" },
//   // { label: "Rooms Description", value: "" },
//   // { label: "Service Details", value: "" },
//   // { label: "Ratings", value: "" },
// ];
// detailsInputSlice.js

import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const detailsInputSlice = createSlice({
  name: "form2",
  initialState,
  reducers: {
    updateDetailsInput: (state, action) => {
      return action.payload; // Update the state with the new payload directly
    },
  },
});

export const { updateDetailsInput } = detailsInputSlice.actions;
export const selectDetailsFormData = (state) => state.detailsInput;
export default detailsInputSlice.reducer;
