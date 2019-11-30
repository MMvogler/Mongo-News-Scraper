var express = require("express");
var expressHandlebars = require("express-handlebars");
var mongoose = require("mongoose");

// Scraping tools
// var axios = require("axios");
// var cheerio = require("cheerio");

// // Require all models
// var db = require("./models");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

var router = express.Router();

require("./routes/htmlRoutes")(router);

// Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Make public a static folder
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));

app.use(router);

mongoose.connect("mongodb://localhost/mongo-news-scrape-19", { useNewUrlParser: true });

// mongoose.connect(db, function(error) {

//   if (error) {
//     console.log(error);
//   }

//   else {
//     console.log("mongoose connected")
//   }
// });
  
  // Start the server
  app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  


