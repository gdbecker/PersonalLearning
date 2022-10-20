// NPM packages to include
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

// App setup
const app = express();
app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:true}));

// Routes
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const options = {
    method:"POST",
    auth:"garrettb:" + apiKey
  }

  const request = https.request(mailchimpURL, options, function(response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data) {
    });
  });

  request.write(jsonData);
  request.end();
});

// Help user try again to sign up
app.post("/failure", function(req, res) {
  res.redirect("/");
});

// Run server
app.listen(3000, function() {
  console.log("Running on port 3000");
});

// Mailchimp API key
const apiKey = "1f58290380cea1eabff4089c35095034-us12";
const listID = "0bd6e4aafa";
const mailchimpURL = "https://us12.api.mailchimp.com/3.0/lists/" + listID;
