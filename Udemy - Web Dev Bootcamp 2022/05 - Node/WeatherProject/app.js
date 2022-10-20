const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// Routes
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var query = req.body.cityName;
  units = "imperial"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&limit=1&units=" + units + "&appid=1b097d58f77c78ab34d2e237c8d98729";

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon_code = weatherData.weather[0].icon;
      const img_url = "https://openweathermap.org/img/wn/" + icon_code + "@2x.png";

      tempHTML = "<h1>The weather in " + query + " is " + temp + " degrees Fahrenheit</h1>";
      descriptionHTML = "<h2>The weather description is " + description + "</h2>"
      imgHTML = "<img src='" + img_url + "'>";

      res.write(tempHTML);
      res.write(descriptionHTML);
      res.write(imgHTML);
      res.send();
    });
  });
});



// Run server
app.listen(3000, function() {
  console.log("Running server on port 3000");
});
