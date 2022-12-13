const router = require("express").Router();
const saltRounds = 10;
// const myPlaintextPassword = "usedforhash";
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
// const { ObjectId } = require("mongodb");

// model
const User = require("../../models/User");
const Batch = require("../../models/Batch");


router.post("/", async (req, res) => {
  try {
    const isUserExit = await User.findOne({
      email: req.body.email,
    });

    if (isUserExit) {
      return res.status(400).json({
        error: "User already exist",
        success: false,
      });
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      name: req.body.fname,
      email: req.body.email,
      phone: req.body.phone,
      password: hash,
      batch: req.body.batch,
      card: req.body.card,
    });

    newUser.save().then((generatedUser)=>{
      const enrollment = new Batch({
        id: generatedUser._id,
        batch: req.body.batch,
      });
      enrollment.save();
    });

    
    return res.status(201).json({ message: "User Registered" ,success: true});

  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

module.exports = router;
