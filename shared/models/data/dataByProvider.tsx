import mongoose, { Schema, Document } from "mongoose";
import { mongoDB } from "../../utilities/database/mongo";
import IDataByProvider from "../../interfaces/user/provider"; // Adjust the import path accordingly

// Initialize MongoDB connection
mongoDB();

// Define the schema for Provider Profile
const ProviderDataSchema: Schema = new Schema(
  {
    userId: { type: String, required: true },
    mainUserId: { type: String, required: true },
    mainUserName: { type: String, required: true },
    category: { type: String, required: true },
    scope: { type: String, required: true },
    activity: { type: String, required: true },
    type: { type: String, required: true },
    units: { type: String, required: true },
    totalConsumption: { type: Number, required: true },
    methodology: { type: String, required: true },
    verification: { type: String, required: true },
    from: { type: Date, required: true },
    to: { type: Date, required: true },
    factor: { type: Number, required: true },
  },
  { timestamps: true },
);

// Define the Provider Profile model interface
interface IProviderDataModel extends Document, IDataByProvider {}

// Define the Provider Profile model
export const ProviderDataModel =
  mongoose.models.ProviderData ||
  mongoose.model<IProviderDataModel>("ProviderData", ProviderDataSchema);
