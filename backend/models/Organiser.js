const mongoose = require("mongoose");
const Event = require("./Event");
const bcrypt = require("bcryptjs");

const organisersSchema = new mongoose.Schema({
  company_name: String,
  email: String,
  address: String,
  password: String,
  mobile_no: Number,
  landline_no: Number,
  state: String,
  city: String,
  pincode: String,
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});
organisersSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, 10);
    console.log(this.password);
  }
});
module.exports = mongoose.model("Organiser", organisersSchema);
