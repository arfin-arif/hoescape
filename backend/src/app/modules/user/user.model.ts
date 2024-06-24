import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { IUser, UserModel } from "./user.interface";
import config from "../../../config";

const UserSchema = new Schema<IUser>(
  {
    password: {
      type: String,
      required: true,
      minlength: 4,
      select: 0,
    },
    securityLevel: {
      type: String,
      required: true,
      enum: ["Admin", "Manager", "Base"],
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.statics.isUserExist = async function (
  email: string
): Promise<Pick<
  IUser,
  "_id" | "email" | "password" | "securityLevel" | "name"
> | null> {
  return await User.findOne(
    { email },
    { password: 1, securityLevel: 1, email: 1, name: 1 }
  );
};

UserSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

UserSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds)
  );
  next();
});

export const User = model<IUser, UserModel>("User", UserSchema);
