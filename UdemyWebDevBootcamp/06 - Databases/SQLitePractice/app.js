// NPM packages to include
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs"); //"esm" is another view engine option

// Custom modules to import

// Database packages
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

// Database setup
const dbPromise = sqlite.open({
  filename: 'data.db',
  driver: sqlite3.Database
});

// App setup
const app = express();
app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Starting variables

// Routes
app.get("/", async function(req, res) {
  const db = await dbPromise;
  const dbMessages = await db.all(`SELECT * FROM Message;`)
  res.render("index", {messages:dbMessages});
});

app.post("/addMessage", async function(req, res) {
  const db = await dbPromise;
  var newMessage = req.body.newMessage;
  await db.run(`INSERT INTO Message (text) VALUES (?)`, newMessage);
  res.redirect("/");
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
