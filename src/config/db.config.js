const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = connectDB;
