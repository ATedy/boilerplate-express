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

app.get(
  "/now",
  function (req, res, next) {
    req.user = new Date().toString(); // Hypothetical synchronous operation
    next();
  },
  function (req, res) {
    res.json({time: req.user});
  }
);

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

// echo route
app.get("/:word/echo", function (req, res) {
  word = req.params.word;
  res.json({echo: word});
});

// echo route
app.get("/name", function (req, res) {
  firstName = req.query.first;
  lastName = req.query.last;
  res.json({name: `${firstName} ${lastName}`});
});

module.exports = app;
