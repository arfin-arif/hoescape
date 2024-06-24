import { Schema, model } from "mongoose";
import { HotelModel, IHotel } from "./hotel.interface";

const HotelSchema = new Schema<IHotel>({
  image: [{ type: String }],
  hotelName: { type: String, required: true },
  hotelType: {
    type: String,
    required: true,
    // enum: [
    //   "hotel",
    //   "b&b",
    //   "residence",
    //   "agriturismo",
    //   "villaggio",
    //   "casa vacanza",
    // ],
  },
  hotelID: { type: String, required: true, unique: true },
  morganaID: { type: String },
  website: { type: String },
  email: { type: String },
  phoneNumber: { type: String },
  priority: { type: Number },
  hotelDescriptions: { type: String },
  roomDescriptions: { type: String },
  serviceDetails: { type: String },
  serviceIncluded: [{ type: String }],
  strengths: [{ type: String }],
  summary: { type: String },
  stars: { type: Number },
  ageReductions: [
    {
      ageLimit: {
        type: Number,
      },
      discount: {
        type: Number,
      },
    },
  ],
  XMLurl: { type: String },
});

export const Hotel = model<IHotel, HotelModel>("Hotel", HotelSchema);

/***
 * 
 * 
 * import { Schema, model } from "mongoose";
import { HotelModel, IHotel } from "./hotel.interface";

const HotelSchema = new Schema<IHotel>({
  image: [{ type: String }],
  hotelName: { type: String, required: true },
  hotelType: {
    type: String,
    required: true,
    enum: [
      "hotel",
      "b&b",
      "residence",
      "agriturismo",
      "villaggio",
      "casa vacanza",
    ],
  },
  hotelID: { type: String, required: true, unique: true },
  morganaID: { type: String, required: true, unique: true },
  website: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  priority: { type: Number, required: true },
  hotelDescriptions: { type: String, required: true },
  roomDescriptions: { type: String, required: true },
  serviceDetails: { type: String, required: true },
  serviceIncluded: [{ type: String }],
  strengths: [{ type: String }],
  summary: { type: String, required: true },
  stars: { type: Number },
  ageReductions: [
    {
      ageLimit: {
        type: Number,
      },
      discount: {
        type: Number,
      },
    },
  ],
  XMLurl: { type: String, required: true },
});

export const Hotel = model<IHotel, HotelModel>("Hotel", HotelSchema);

 * 
 * 
 * 
 */
