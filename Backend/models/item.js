const mongoose = require("mongoose");


const ItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  description: String,
  currentbid: Number,
  remainingtime: Number,
  buynow: Number,
  wininguser: String,
  sold: Boolean,
  owner: String,
  id: Number,
  //createdAt: { type: Date, 'default': Date.now } //stores date of record creation
});

module.exports = mongoose.model("Item", ItemSchema);
