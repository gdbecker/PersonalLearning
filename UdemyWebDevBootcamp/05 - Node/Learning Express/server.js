// Installing the 'express' package
// "mpn install express"

// bare bones of an express server!
const express = require("express");
const app = express();

// 'request', 'response' inside the function
// app routes
app.get("/", function(req, res) {
  res.send("<h1>HELLO WORLD!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at garrett@email.com!");
});

app.get("/about", function(req, res) {
  res.send("Here's some cool info about me :) I love hiking and board games and everything nerdy.");
});

// Running the server
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
