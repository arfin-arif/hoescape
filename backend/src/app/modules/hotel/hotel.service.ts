import { IHotel } from "./hotel.interface";
import { Hotel } from "./hotel.model";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

const createHotel = async (
  payload: IHotel,
  photo: string,
  imageURL: string
): Promise<IHotel> => {
  const result = await Hotel.create({
    ...payload,
    image: [photo, imageURL],
  });
  return result;
};
const editHotel = async (
  hotelId: string,
  payload: Partial<IHotel>
): Promise<IHotel | null | undefined> => {
  let result;

  // Check if the hotel with the given hotelID exists
  const existingHotel = await Hotel.findOne({ hotelID: hotelId });

  if (existingHotel) {
    // Hotel exists, update it
    result = await Hotel.findOneAndUpdate({ hotelID: hotelId }, payload, {
      new: true,
    });
    if (!result) {
      throw new ApiError(400, "Failed to update hotel");
    }
  } else {
    // Hotel doesn't exist, create it
    result = await Hotel.create({ ...payload, hotelID: hotelId });
    if (!result) {
      throw new ApiError(400, "Failed to create hotel");
    }
  }

  return result;
};

export const HotelService = {
  createHotel,
  editHotel,
};
