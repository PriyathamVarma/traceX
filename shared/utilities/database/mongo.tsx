// This file is for connecting with Mongo DB
import * as mongoose from "mongoose";
// Loading ENV variables
require("dotenv").config();

// connect the db
const MONGODB_URI = process.env.MONGODB_URI as string;

export const mongoDB = () => {
  mongoose
    .connect(
      // Need to change this for future connections
      MONGODB_URI,
    )
    .then(() => {
      console.log("DB Connected");
      //console.log(DB);
    })
    .catch((err) => {
      console.log("Error while connecting DB \n", err);
    });
};
