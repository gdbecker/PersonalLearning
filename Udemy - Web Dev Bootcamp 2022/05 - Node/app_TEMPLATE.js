// NPM packages to include
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Custom modules to import

// App setup
const app = express();
app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Starting variables

// Routes
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// Run server
app.listen(3000, function() {
  console.log("Running server on port 3000");
});
