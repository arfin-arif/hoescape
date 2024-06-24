import { Request, Response } from "express";
import httpStatus from "http-status";
import { RequestHandler } from "express-serve-static-core";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import ApiError from "../../../errors/ApiError";
import { IHotel } from "./hotel.interface";
import { HotelService } from "./hotel.service";
import multer, { Multer, FileFilterCallback } from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(null, "uploads/");
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed"), false);
  }
};

export const upload: Multer = multer({
  storage: storage,
  fileFilter: fileFilter,
});

const createHotel: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...hotelData } = req.body;
    const photo = req?.file?.filename;
    const { image: imageURL } = hotelData;
    // if (!photo || !imageURL) {
    //   throw new ApiError(httpStatus.BAD_REQUEST, "No photo uploaded");
    // }
    const result = await HotelService.createHotel(hotelData, photo, imageURL);
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed creating a new hotel");
    }
    sendResponse<IHotel>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Hotel Added successfully!",
      data: result,
    });
  }
);
const editHotel: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...hotelData } = req.body;
    const { hotelID } = req.params;

    const result = await HotelService.editHotel(hotelID, hotelData);
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed creating  hotel");
    }
    sendResponse<IHotel>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Hotel Added successfully!",
      data: result,
    });
  }
);

export const HotelController = {
  createHotel,
  editHotel,
};
