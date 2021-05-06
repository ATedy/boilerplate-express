var express = require("express");
var app = express();
// const path = require("path");

app.get("/", function (req, res) {
  // res.sendFile(path.join(__dirname, "../views", "index.html"));
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
