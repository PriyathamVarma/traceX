// This file contains models for carbon emission data to connect to MongoDB
import mongoose from "mongoose";
import { mongoDB } from "../../utilities/database/mongo";
import ICarbonEmissionData from "../../interfaces/admin/emissions";

// Schema
mongoDB();

const CarbonEmissionSchema = new mongoose.Schema<ICarbonEmissionData>(
  {
    scope: {
      type: Number,
      enum: [1, 2, 3], // Enforce valid scope values
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    activity: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    units: {
      type: String,
      enum: [
        "tonnes",
        "litres",
        "kWh (Net CV)",
        "kWh (Gross CV)",
        "kg",
        "GJ",
        "km",
        "miles",
        "tonee.km",
      ], // Enforce valid units
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }, // Include timestamps for auditing
);

// Model export
export const CarbonEmissionModel =
  mongoose.models.CarbonEmission ||
  mongoose.model("CarbonEmission", CarbonEmissionSchema);
