const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    islogged: Boolean,
    latitude: Number,
    longitude: Number,
  },
  {
    timestamps: true,
  } /*optional field if you wnat to store date of record creation*/
);

module.exports = mongoose.model("User", UserSchema);
