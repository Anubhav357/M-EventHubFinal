const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.get("/profile/:id", function (req, res) {
  var id = req.params.id;

  User.findOne({ _id: id }, function (err, foundUser) {
    date = new Date(foundUser.dob);
    res.send({
      name: foundUser.name.fname + " " + foundUser.name.lname,
      email: foundUser.email,
      gender: foundUser.gender,
      address: foundUser.address.street,
      state: foundUser.address.state,
      city: foundUser.address.city,
      pincode: foundUser.address.pincode,
      dob: date.toDateString(),
      mobile: foundUser.mobile,
    });
  });
});

router.post("/register", function (req, res) {
  User.find({ email: req.body.email }, async function (err, foundUsers) {
    if (foundUsers.length === 0) {
      const newUser = new User({
        name: {
          fname: req.body.fname,
          lname: req.body.lname,
        },
        email: req.body.email,
        password: req.body.password,
        dob: req.body.dob,
        gender: req.body.gender,
        mobile: req.body.mobile,
        address: {
          street: req.body.address,
          state: req.body.state,
          city: req.body.city,
          pincode: req.body.pincode,
        },
      });
      console.log(newUser);
      const token = await newUser.generateAuthToken();
      res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header("Access-Control-Allow-Credentials", true);
      res.cookie("token", token, {
        expires: new Date(Date.now() + 9999999),
        httpOnly: false,
      });
      // console.log(cookie);

      const newUserSaved = await newUser.save();
      console.log(newUserSaved);
      res.send(true);
    } else {
      res.send("User already registered");
    }
  });
});

router.post("/login", function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({ email: email }, async function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        const isMatch = await bcrypt.compare(password, foundUser.password);
        console.log("foundUser ", foundUser);
        const token = await foundUser.generateAuthToken();
        console.log("The token part is: ", token);

        if (isMatch) {
          res.send({ found: true, id: foundUser._id });
          console.log("Successfully logged In");
        } else {
          res.send({ found: "incorrect" });
          console.log("Incorrect user email or password");
        }
      } else {
        res.send({ found: "incorrect" });
        console.log("Incorrect user email or password");
      }
    }
  });
});

module.exports = router;
