// This file contains models for user profile to connect to MongoDB
import mongoose from "mongoose";
import { mongoDB } from "../../utilities/database/mongo";
import IProvider from "../../interfaces/user/provider"; // Adjust the import path accordingly

// Schema
mongoDB();

// For Provider profile creation
const ProviderProfileSchema = new mongoose.Schema<IProvider>(
  {
    userId: String,
    userName: String,
    role: {
      type: String,
      enum: ["provider", "supplier"],
    },
    email: {
      type: String,
      required: true,
    },
    from: Date,
    to: Date,
    status: {
      type: String,
      enum: ["accepted", "invited", "declined"],
    },
  },
  { timestamps: true },
);

// For Provider Profile service creation
export const ProviderProfileModel =
  mongoose.models.ProviderProfile ||
  mongoose.model("ProviderProfile", ProviderProfileSchema);
