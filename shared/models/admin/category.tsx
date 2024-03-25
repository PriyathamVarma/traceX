// This file contains models for carbon emission data to connect to MongoDB
import mongoose from "mongoose";
import { mongoDB } from "../../utilities/database/mongo";
import ICarbonEmissionDataCategory from "../../interfaces/admin/category";

// Schema
mongoDB();

const CarbonEmissionCategorySchema =
  new mongoose.Schema<ICarbonEmissionDataCategory>(
    {
      category: {
        type: String,
        required: true,
      },
      scope: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }, // Include timestamps for auditing
  );

// Model export
export const CarbonEmissionCategoryModel =
  mongoose.models.CarbonEmissionCategory ||
  mongoose.model("CarbonEmissionCategory", CarbonEmissionCategorySchema);
