import express from "express";
import { HotelController, upload } from "./hotel.controller";
import { Hotel } from "./hotel.model";

const router = express.Router();

router.post(
  "/create-hotel",
  upload.single("image"),
  HotelController.createHotel
);
// http://localhost:5000/uploads/{filename}
router.post("/update-hotel/:hotelID", HotelController.editHotel);

export const HotelRoutes = router;
