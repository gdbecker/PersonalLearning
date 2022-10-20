// NPM packages to include
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Custom modules to import
const date = require(__dirname + "/date.js");

// App setup
const app = express();
app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Starting variables
var items = ["Buy food", "Cook food", "Eat the food!"];
var workItems = [];

// Routes
app.get("/", function(req, res) {
  let day = date.getDate();
  res.render("list", {listTitle:day, newListItems:items});
});

app.post("/", function(req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  };
});

app.get("/work", function(req, res) {
  res.render("list", {listTitle:"Work", newListItems:workItems});
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  };
});

app.get("/about", function(req, res) {
  res.render("about");
});

// Run server
app.listen(3000, function() {
  console.log("Running server on port 3000");
});
