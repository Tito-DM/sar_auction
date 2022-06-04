const mongoose = require("mongoose"); // to deal with the mongodb database
const dotenv = require("dotenv");

//configure dotenv to use the .env file
dotenv.config();
//connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASEURI);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log("MongoDB Connection Error...");
  }
};

module.exports = connectDB;
