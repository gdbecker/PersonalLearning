//jshint esversion:6
// NPM packages to include
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs"); //"esm" is another view engine option

// Set up encryption
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Google authenticaton
// garrettbeckerpython1@gmail.com
clientID = "1036168458595-9fauqqi310ppt30dcchfpaf5mhtnv932.apps.googleusercontent.com";
clientSecret = "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";
const GoogleStrategy = require("passport-google-oauth20");

// Set up cookies and sessions
const session = require("express-session");
const passport = require("passport");

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
app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Starting variables

// Google and Passport
passport.use(new GoogleStrategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: "https://localhost:3000/auth/google/secrets",
    scope: [ "profile" ],
    state: true
  },
  function verify(accessToken, refreshToken, profile, cb) {
    db.get('SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?', [
      'https://accounts.google.com',
      profile.id
    ], function(err, cred) {
      if (err) { return cb(err); }

      if (!cred) {
        // The account at Google has not logged in to this app before.  Create a
        // new user record and associate it with the Google account.
        db.run(`INSERT INTO Users (email) VALUES (?)`, [
          profile.displayName
        ], function(err) {
          if (err) { return cb(err); }

          var id = this.lastID;
          db.run(`INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)`, [
            id,
            "https://accounts.google.com",
            profile.id
          ], function(err) {
            if (err) { return cb(err); }
            var user = {
              id: id,
              name: profile.displayName
            };
            return cb(null, user);
          });
        });
      } else {
        // The account at Google has previously logged in to the app.  Get the
        // user record associated with the Google account and log the user in.
        db.get(`SELECT * FROM Users WHERE id = ?`, [ cred.user_id ], function(err, row) {
          if (err) { return cb(err); }
          if (!row) { return cb(null, false); }
          return cb(null, row);
        });
      }
    });
  }
));

// Routes
app.get("/", function(req, res) {
  res.render("home");
});

app.get("/auth/google", passport.authenticate("google"));

app.get("/auth/google/secrets",
  passport.authenticate('google', { failureRedirect: "/login", failureMessage: true }),
  function(req, res) {
    res.redirect("/secrets");
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

app.get("/secrets", async function(req, res) {
  if (req.isAuthenticated()) {
    res.render("secrets");
  } else {
    res.redirect("/login");
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
