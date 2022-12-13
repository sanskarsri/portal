const router = require("express").Router();
var jwt = require('jsonwebtoken');
const { ObjectId } = require("mongodb");

// model
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const token = req.cookies.token;
    const verifyToken = jwt.verify(token,"secret");

    const isUser = await User.findOne({_id:ObjectId(verifyToken)});

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

router.get("/getusers", async (req, res) => {
  try {

    const Users = await User.find();
    let a_count = 0,b_count = 0,c_count = 0,d_count = 0;

        for (let d of Users) {
          if(d.batch=="1")
            a_count += 1;
            else  if(d.batch=="2")
                b_count += 1;
                else  if(d.batch=="3")
                    c_count += 1;
                    else  
                        d_count += 1;
        }

    return res.status(201).json({users: Users, a_count, b_count, c_count, d_count, success: true});

  } catch (err) {
    return res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

module.exports = router;
