const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Organiser = require("../models/Organiser");
const jwt = require("jsonwebtoken");

router.post("/login", function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email);
  console.log(password);

  Organiser.findOne({ email: email }, async function (err, foundCompany) {
    if (err) {
      console.log(err);
    } else {
      if (foundCompany) {
        const isMatch = await bcrypt.compare(password, foundCompany.password);
        console.log(bcrypt.compare(password, foundCompany.password));
        console.log("foundCompany ", foundCompany);
        // const token = await foundCompany.generateAuthToken();
        // console.log("The token part is: ", token);

        if (isMatch) {
          res.send({ found: true, id: foundCompany._id });
          console.log("Successfully logged In");
        } else {
          res.send({ found: "incorrect" });
          console.log("Incorrect email or password");
        }
      } else {
        res.send({ found: "incorrect" });
        console.log("Incorrect Company email or password");
      }
    }
  });
});
router.post("/register", function (req, res) {
  Organiser.find(
    { email: req.body.email },
    async function (err, foundOrganisers) {
      if (foundOrganisers.length === 0) {
        const newOrganiser = new Organiser({
          company_name: req.body.name,
          email: req.body.email,
          address: req.body.address,
          password: req.body.password,
          mobile_no: req.body.mobile,
          landline_no: req.body.landline,
          state: req.body.state,
          city: req.body.city,
          pincode: req.body.pincode,
        });

        const org = await newOrganiser.save();

        res.send(true);
      } else {
        res.send("Organiser already registered");
      }
    }
  );
});

router.get("/profile/:id", function (req, res) {
  var id = req.params.id;

  Organiser.findOne({ _id: id }, function (err, foundOrganiser) {
    res.send({
      name:foundOrganiser.company_name,
      email:foundOrganiser.email,
      mobile: foundOrganiser.mobile_no,
      landline: foundOrganiser.landline_no,
      bio:foundOrganiser.bio,
      about:foundOrganiser.about,
      state: foundOrganiser.state,
      city: foundOrganiser.city,
      pincode: foundOrganiser.pincode      
    });
  });
});

router.post("/profile/:extra/:id",function(req,res){
  if(req.params.extra==="bio"){
    Organiser.findOne({_id:req.params.id},function(err,foundOrganiser){
      if(foundOrganiser){
        foundOrganiser.bio=req.body.bio
      }
    });
  }
  else if(req.params.extra==="about"){
    Organiser.findOne({_id:req.params.id},function(err,foundOrganiser){
      if(foundOrganiser){
        foundOrganiser.about=req.body.about
      }
    });
  }
});

// get request to specific bio and about not to be done since taken
// care of it in the profile route itself(line no. 65)

// router.get("/profile/:extra/:id",function(req,res){
//   if(req.params.extra==="bio"){
//     Organiser.findOne({_id:req.params.id},function(err,foundOrganiser){
//       if(foundOrganiser){
//         res.send()
//         foundOrganiser.bio=req.body.bio
//       }
//     });
//   }
//   else if(req.params.extra==="about"){
//     Organiser.findOne({_id:req.params.id},function(err,foundOrganiser){
//       if(foundOrganiser){
//         foundOrganiser.about=req.body.about
//       }
//     });
//   }
// })

module.exports = router;
