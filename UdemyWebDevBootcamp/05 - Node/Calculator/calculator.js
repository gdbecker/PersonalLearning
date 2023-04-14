// Installing the 'express' package
// "mpn install express"

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// 'request', 'response' inside the function
// app routes
// Basic Calculator
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

// BMI Calculator
app.get("/bmi", function(req, res) {
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function(req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmiResult = weight / (height * height);
  res.send("Your BMI is " + bmiResult);
});

// Running the server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
