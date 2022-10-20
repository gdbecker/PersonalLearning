// NPM packages to include
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");

// Custom modules to import
const date = require(__dirname + "/date.js");

// Database packages
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

// Database setup
const dbPromise = sqlite.open({
  filename: "todo.db",
  driver: sqlite3.Database
});

// App setup
const app = express();
app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Routes
app.get("/", async function(req, res) {
  let day = date.getDate();
  const db = await dbPromise;
  let listID = await db.all(`SELECT id FROM Lists WHERE name = ?`, "Home");
  listID = listID[0]["id"];
  const dbItems = await db.all(`SELECT * FROM Items WHERE type = ?`, listID);
  let dbListNames = await db.all(`SELECT name FROM Lists`);
  res.render("list", {dayTitle:day, allListNames:dbListNames, listTitle:"Home", itemList:dbItems});
});

app.get("/addList", function(req, res) {
  res.render("addList");
});

app.post("/addList", async function(req, res) {
  const db = await dbPromise;
  let newListName = req.body.newList;
  await db.run(`INSERT INTO Lists (name) VALUES (?)`, newListName);
  res.redirect("/");
});

app.get("/:listName", async function(req, res) {
  let day = date.getDate();
  const db = await dbPromise;
  let listName = lodash.startCase(req.params.listName);

  if (listName === "Home") {
    res.redirect("/");
  }

  let listID = await db.all(`SELECT id FROM Lists WHERE name = ?`, listName);
  listID = listID[0]["id"];
  const dbItems = await db.all(`SELECT * FROM Items WHERE type = ?`, listID);
  let dbListNames = await db.all(`SELECT name FROM Lists`);
  res.render("list", {dayTitle:day, allListNames:dbListNames, listTitle:listName, itemList:dbItems});
});

app.post("/newItem", async function(req, res) {
  const db = await dbPromise;
  let itemName = req.body.newItem;
  let listName = req.body.list;
  let listID = await db.all(`SELECT id FROM Lists WHERE name = ?`, listName);
  listID = listID[0]["id"];
  await db.run(`INSERT INTO Items (name, type) VALUES (?, ?)`, itemName, parseInt(listID));

  if (listName === "Home") {
    res.redirect("/")
  } else {
    res.redirect("/" + req.body.list)
  }
});

app.post("/deleteItem/:listTitle/:itemID", async function(req, res) {
  const db = await dbPromise;
  let itemToDelete = await db.all(`SELECT * FROM Items WHERE id = ?`, parseInt(req.params.itemID));
  let listID = itemToDelete[0]["type"];

  await db.run(`DELETE FROM Items WHERE id = ?`, parseInt(req.params.itemID));

  if (req.params.listTitle === "Home") {
    res.redirect("/");
  } else {
    res.redirect("/" + req.params.listTitle);
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
