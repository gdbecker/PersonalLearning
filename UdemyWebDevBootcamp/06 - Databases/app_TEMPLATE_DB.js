// NPM packages to include
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs"); //"esm" is another view engine option

// Database packages
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

// Custom modules to import

// Database setup
const dbPromise = sqlite.open({
  filename: "data.db",
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
  const dbData = await db.all(`SELECT * FROM table_name;`)
  res.render("index", {data:dbData});
});

app.post("/addSomething", async function(req, res) {
  const db = await dbPromise
  var newSomething = req.body.newSomething;
  await db.run(`INSERT INTO table_name (text) VALUES (?)`, newSomething);
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
