import { Model } from "mongoose";

export type IUser = {
  _id: string;
  password: string;
  securityLevel: string;
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};

export type ILoginUser = {
  email: string;
  password: string;
};

export type UserModel = {
  isUserExist(
    email: string
  ): Promise<
    Pick<IUser, "_id" | "email" | "password" | "securityLevel" | "name">
  >;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;

export type IRefreshTokenResponse = {
  accessToken: string;
};
