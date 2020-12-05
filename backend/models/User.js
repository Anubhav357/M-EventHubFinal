const mongoose = require("mongoose");
const Event = require("./Event");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const usersSchema = new mongoose.Schema({
  name: {
    fname: String,
    lname: String,
  },
  email: String,
  password: {
    type: String,
    min: 6,
    max: 20,
  },
  dob: Date,
  gender: String,
  mobile: {
    type: String,
    min: 10,
    max: 10,
  },
  address: {
    street: String,
    state: String,
    city: String,
    pincode: Number,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  bookedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
});

usersSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString() },
      "hellomynameismanjotsinghhellomynameismanjotsingh"
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    res.send(err);
  }
};

usersSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
const User = mongoose.model("User", usersSchema);

module.exports = User;
