// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


//variables for holding the reservation data
var confirmedResv = new Array();
var waitList = new Array();
// confirmedResv should hold an array of objects.
//Each object should hold the info on the reservation
var reservationInfo = {
  name: "",
  phone: "",
  email: "",
  uniqueId: ""
}

//modify reservation Info to store current

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables"));
});