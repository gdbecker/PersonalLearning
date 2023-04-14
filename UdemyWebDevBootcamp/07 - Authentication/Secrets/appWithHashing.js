//jshint esversion:6
// NPM packages to include
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs"); //"esm" is another view engine option

// Set up encryption
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Database packages
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

// Custom modules to import

// Database setup
const dbPromise = sqlite.open({
  filename: "user.db",
  driver: sqlite3.Database
});

// App setup
const app = express();
app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Starting variables

// Routes
app.get("/", function(req, res) {
  res.render("home");
});

app.get("/register", function(req, res) {
  res.render("register");
});

app.post("/register", async function(req, res) {
  bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
    const db = await dbPromise;
    let newUsername = req.body.username;
    let newPassword = hash;
    await db.run(`INSERT INTO Users (email, password) VALUES (?, ?)`, [newUsername, newPassword]);
    res.render("secrets");
  });
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.post("/login", async function(req, res) {
  const db = await dbPromise;
  let username = req.body.username;
  let password = req.body.password;

  let selectedUser = await db.all(`SELECT * FROM Users WHERE email = ?`, username);
  if (typeof selectedUser !== "undefined") {
    bcrypt.compare(password, selectedUser[0]["password"], async function(err, result) {
      if (result === true) {
        res.render("secrets");
      }
    });
  }
});

// Run server
const setup = async() => {
  const db = await dbPromise;
  await db.migrate();
  app.listen(3000, function() {
    console.log("Running server on port 3000");
  });
}

setup();
