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
  filename: "blog.db",
  driver: sqlite3.Database
});

// App setup
const app = express();
app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

// Starting variables
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutStartingContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactstartingContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// Routes
app.get("/", async function(req, res) {
  const db = await dbPromise;
  const dbPosts = await db.all(`SELECT * FROM Posts`);

  res.render("home", {homeContent:homeStartingContent, posts:dbPosts});
});

app.get("/about", function(req, res) {
  res.render("about", {aboutContent:aboutStartingContent});
});

app.get("/contact", function(req, res) {
  res.render("contact", {contactContent:contactstartingContent});
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.post("/compose", async function(req, res) {
  const db = await dbPromise;
  newPostTitle = req.body.newTitle;
  newPostBody = req.body.newBody;
  await db.run(`INSERT INTO Posts (title, body) VALUES (?, ?)`, newPostTitle, newPostBody);
  res.redirect("/");
});

app.get("/posts/:postID", async function(req, res) {
  const db = await dbPromise;
  const postID = parseInt(req.params.postID);
  const selectedBlog = await db.all(`SELECT * FROM Posts WHERE id = ?`, postID);

  res.render("post", {blog:selectedBlog[0]});
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
