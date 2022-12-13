const express= require('express');
require('dotenv').config();
const { initDB } = require("./init");
var cookieParser = require('cookie-parser');

const app=express();

// Body parser middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// controllers
const registerapi = require("./controller/api/register");
const authapi = require("./controller/api/auth");
const loginapi = require("./controller/api/login");


app.get("/", (req, res) => {
  res.send("API is running");
});
//routes
app.use("/api/register", registerapi);
app.use("/api/isUserAuth", authapi);
app.use("/api/login", loginapi);




initDB().then(() => {
    const port = process.env.PORT || 5000;
  
    if (process.env.NODE_ENV === "production") {
      app.use(express.static("client/build"));
      app.get("*", (req, res) => {
        res.sendFile(
          path.resolve(__dirname + "./client/build/index.html"),
          function (err) {
            if (err) {
              console.log(err);
            }
          }
        );
      });
    }
  
    app.listen(port, function () {
      console.log("Server started on port " + port);
    });
  });