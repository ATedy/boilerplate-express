var express = require("express");
var app = express();
var path = require("path");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "public")));

// serving the app with a json router
let msg = {message: "Hello json"};
app.get("/json", function (req, res) {
  res.json(msg);
});

module.exports = app;
