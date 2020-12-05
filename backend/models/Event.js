const mongoose = require("mongoose");
const User = require("./User");

const eventsSchema = new mongoose.Schema({
  type: String,
  budget: Number,
  region: String,
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Event = mongoose.model("Event", eventsSchema);

module.exports = Event;
