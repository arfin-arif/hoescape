import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { HotelRoutes } from "../modules/hotel/hotel.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/hotel",
    route: HotelRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
