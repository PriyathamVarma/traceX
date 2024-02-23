// This file contains models for carbon emission data to connect to MongoDB
import mongoose from "mongoose";
import { mongoDB } from "../../utilities/database/mongo";
import ICarbonEmissionDataType from "../../interfaces/admin/type";

// Schema
mongoDB();

const CarbonEmissionTypeSchema = new mongoose.Schema<ICarbonEmissionDataType>(
  {
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // Include timestamps for auditing
);

// Model export
export const CarbonEmissionTypeModel =
  mongoose.models.CarbonEmissionType ||
  mongoose.model("CarbonEmissionType", CarbonEmissionTypeSchema);
