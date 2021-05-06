var express = require("express");
var app = express();
var path = require("path");

const dotenv = require("dotenv");
dotenv.config();

//middleware function
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " " + "-" + " " + req.ip);
  next();
});

// app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "public")));

// serving the app with a json router

app.get("/json", function (req, res) {
  let greeting = "";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    greeting = "HELLO JSON";
  } else {
    greeting = "Hello json";
  }

  res.json(greeting);
});

module.exports = app;
