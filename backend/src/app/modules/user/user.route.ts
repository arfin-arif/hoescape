import express from "express";
import { UserController } from "./user.controller";
import { ENUM_USER_ROLE } from "../../../enums/user";
import auth from "../../middlewares/auth";
const router = express.Router();

router.post("/create-employee", UserController.createUser);
router.post("/login", UserController.loginUser);
router.get("/all-users", UserController.getAllUser);
router.patch("/update-user/:id", UserController.updateUser);
router.delete("/delete-user/:id", UserController.deleteUser);
router.post("/refresh-token", UserController.refreshToken);

export const UserRoutes = router;
