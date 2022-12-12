const router = require("express").Router();
var jwt = require('jsonwebtoken');

// model
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const token = req.cookies.token;
    const verifyToken = jwt.verify(token,"secret");

    const isUser = await User.findOne({_id:verifyToken});

    if (!isUser) {
      return res.status(400).json({
        error: "No user exist",
        success: false,
      });
    }

    req.token=token;
    return res.status(201).json({message: "Authorized",auth: "true"});
    
  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

module.exports = router;
