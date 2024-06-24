import { JwtPayload, Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
  IUser,
} from "./user.interface";
import { User } from "./user.model";
import config from "../../../config";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

const createUser = async (user: IUser): Promise<IUser | null | undefined> => {
  try {
    const createUser = await User.create(user);
    console.log("kll", user);
    if (user.password.length < 3) {
      throw new ApiError(
        httpStatus.NOT_ACCEPTABLE,
        "Password must be more than 4 character"
      );
    }
    if (!createUser) {
      throw new ApiError(400, "Failed to create new user");
    }
    return createUser;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null | undefined> => {
  try {
    if (payload.password) {
      payload.password = await bcrypt.hash(
        payload.password,
        Number(config.bycrypt_salt_rounds)
      );
    }

    const updateUser = await User.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    if (!updateUser) {
      throw new ApiError(400, "Failed to updating  user");
    }
    return updateUser;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;
  const isUserExist = await User.isUserExist(email);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Password is incorrect");
  }

  const { _id, securityLevel, name } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { _id, securityLevel, name },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );
  const refreshToken = jwtHelpers.createToken(
    { _id, securityLevel, name },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

const getAllUser = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken = null;
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (err) {
    throw new ApiError(httpStatus.FORBIDDEN, "Invalid Refresh Token");
  }

  const { _id } = verifiedToken;
  const isUserExist = await User.findById(_id);
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User does not exist");
  }
  const newAccessToken = jwtHelpers.createToken(
    {
      _id: isUserExist._id,
      securityLevel: isUserExist.securityLevel,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const UserService = {
  createUser,
  loginUser,
  getAllUser,
  refreshToken,
  updateUser,
  deleteUser,
};
