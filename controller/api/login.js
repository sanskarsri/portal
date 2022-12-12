const router = require("express").Router();
const saltRounds = 10;
const myPlaintextPassword = "usedforhash";
const bcrypt = require("bcrypt");

// model
const User = require("../../models/User");

router.post("/", async (req, res) => {
  try {
    const isUserExist = await User.findOne({
      email: req.body.email,
    });

    if (!isUserExist) {
      return res.status(400).json({
        error: "No user exist",
        message: "Fail",
        success: false,
      });
    }

    var token = jwt.sign({ id: isUserExist._id }, "secret", {
      expiresIn: "1h",
    });

    bcrypt.compare(
      req.body.password,
      isUserExist.password,
      function (err, result) {
        if (result === true) {
          res.cookie("token", token, {
            httpOnly: true,
          });
          return res.status(201).json({ message: "Success" });
        } else return res.status(400).json({ message: "Fail" });
      }
    );
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

module.exports = router;
