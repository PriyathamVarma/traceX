// This file contains models for user profile to connect to MongoDB
import mongoose from "mongoose";
import { mongoDB } from "../../utilities/database/mongo";
import IUserProfile from "../../interfaces/user/user_profile";

// Schema
mongoDB();

// For User profile creation
const UserProfileSchema = new mongoose.Schema<IUserProfile>(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: false,
    },
  },
  { timestamps: true },
);

// For User Profile service creation
export const UserProfileModel =
  mongoose.models.UserProfile ||
  mongoose.model("UserProfile", UserProfileSchema);
