import { Request, Response } from "express";
import httpStatus from "http-status";
import { RequestHandler } from "express-serve-static-core";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import {
  ILoginUserResponse,
  IRefreshTokenResponse,
  IUser,
} from "./user.interface";
import { UserService } from "./user.service";
import ApiError from "../../../errors/ApiError";
import config from "../../../config";

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...userData } = req.body;
    const result = await UserService.createUser(userData);
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed creating new user");
    }
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Registration successfully!",
      data: result,
    });
  }
);
const updateUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await UserService.updateUser(id, updatedData);
    if (!result) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Failed creating new user");
    }
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  }
);

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserService.deleteUser(id);
  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User deleted successfully !",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  // console.log(loginData);

  const result = await UserService.loginUser(loginData);
  const { refreshToken, ...others } = result;

  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookieOptions);

  sendResponse<ILoginUserResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Logged in  successfully !",
    data: others,
  });
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUser();
  sendResponse<IUser[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users retrieve successfully !",
    data: result,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  const result = await UserService.refreshToken(refreshToken);
  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };

  res.cookie("refreshToken", refreshToken, cookieOptions);

  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: 200,
    success: true,
    message: "New refresh token generated successfully!",
    data: result,
  });
});

export const UserController = {
  createUser,
  loginUser,
  getAllUser,
  refreshToken,
  updateUser,
  deleteUser,
};
