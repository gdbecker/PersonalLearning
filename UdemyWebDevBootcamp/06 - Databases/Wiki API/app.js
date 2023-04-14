// NPM packages to include
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");

// Custom modules to import

// Database packages
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

// Database setup
const dbPromise = sqlite.open({
  filename: "wiki.db",
  driver: sqlite3.Database
});

// App setup
const app = express();
app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Routes
// All Articles
// GET all articles, POST one new article, DELETE all articles
app.route("/articles")
  .get(async function(req, res) {
    const db = await dbPromise;
    let dbArticles = await db.all(`SELECT * FROM Articles`);
    res.send(dbArticles);
  })
  .post(async function(req, res) {
    const db = await dbPromise;
    let newTitle = req.body.title;
    let newContent = req.body.content;
    await db.run(`INSERT INTO Articles (title, content) VALUES (?, ?)`, [newTitle, newContent]);
    res.send("Sccessfully added a new article!");
  })
  .delete(async function(req, res) {
    const db = await dbPromise;
    await db.run(`DELETE FROM Articles`);
    res.send("Successfully cleared the articles table.");
  });

// Specific Article
// GET an article, PUT a an article, PUT and PATCH an article, DELETE an article
app.route("/articles/:articleTitle")
  .get(async function(req, res) {
    const db = await dbPromise;
    let articleTitle = req.params.articleTitle;
    let dbArticle = await db.all(`SELECT * FROM Articles WHERE title = ?`, articleTitle);
    res.send(dbArticle);
  })
  .put(async function(req, res) {
    const db = await dbPromise;
    let articleTitle = req.params.articleTitle;
    let updatedTitle = req.body.title;
    let updatedContent = req.body.content;
    await db.run(`UPDATE Articles SET title = ?, content = ? WHERE title = ?`, [updatedTitle, updatedContent, articleTitle]);
    res.send("Successfully updated the article!");
  })
  .patch(async function(req, res) {
    const db = await dbPromise;
    let articleTitle = req.params.articleTitle;
    let updatedTitle = req.body.title;
    let updatedContent = req.body.content;

    if (typeof updatedTitle !== "undefined" && typeof updatedContent !== "undefined") {
      await db.run(`UPDATE Articles SET title = ?, content = ? WHERE title = ?`, [updatedTitle, updatedContent, articleTitle]);
    } else if (typeof updatedTitle !== "undefined" && typeof updatedContent === "undefined") {
      await db.run(`UPDATE Articles SET title = ? WHERE title = ?`, [updatedTitle, articleTitle]);
    } else if (typeof updatedTitle === "undefined" && typeof updatedContent !== "undefined") {
      await db.run(`UPDATE Articles SET content = ? WHERE title = ?`, [updatedContent, articleTitle]);
    };

    res.send("Successfully patched the article!");
  })
  .delete(async function(req, res) {
    const db = await dbPromise;
    let articleTitle = req.params.articleTitle;
    await db.run(`DELETE FROM Articles WHERE title = ?`, articleTitle);
    res.send("Successfully delete the article.");
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
