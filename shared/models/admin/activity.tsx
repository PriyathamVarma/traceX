// This file contains models for carbon emission data to connect to MongoDB
import mongoose from "mongoose";
import { mongoDB } from "../../utilities/database/mongo";
import ICarbonEmissionDataActivity from "../../interfaces/admin/activity";

// Schema
mongoDB();

const CarbonEmissionActivitySchema =
  new mongoose.Schema<ICarbonEmissionDataActivity>(
    {
      activity: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }, // Include timestamps for auditing
  );

// Model export
export const CarbonEmissionActivityModel =
  mongoose.models.CarbonEmissionActivity ||
  mongoose.model("CarbonEmissionActivity", CarbonEmissionActivitySchema);
