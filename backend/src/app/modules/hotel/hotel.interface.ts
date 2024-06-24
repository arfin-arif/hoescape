import { Model } from "mongoose";

// Define the IHotel type
export type IHotel = {
  image: string[];
  hotelName: string;
  hotelType: string;
  hotelID: string;
  morganaID: string;
  website: string;
  email: string;
  phoneNumber: string;
  priority: number;
  hotelDescriptions: string;
  roomDescriptions: string;
  serviceDetails: string;
  serviceIncluded: string[];
  strengths: string[];
  ageReductions: number[];
  summary: string;
  stars: number;
  XMLurl: string;
};

export type HotelModel = Model<IHotel>;
