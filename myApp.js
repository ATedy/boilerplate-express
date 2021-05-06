var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello, world!");
  console.log("Hello world");
});

module.exports = app;
