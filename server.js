// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


//variables for holding the reservation data
var confirmedResv = new Array();
var waitList = new Array();
// confirmedResv should hold an array of objects.


//modify reservation Info to store current

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Create New Reservation - takes in JSON input
app.post("/reserve", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var reservationInfo = req.body;
  console.log(reservationInfo);

  if (confirmedResv.length < 5){
    confirmedResv.push(reservationInfo);
    console.log("reservation accepted")
    alert("You have a reservation.")
  } else {
    waitList.push(reservationInfo);
    alert("You are on the waitlist")
  }

  res.json(confirmedResv);
});