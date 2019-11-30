// Scraping tools
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

module.exports = function (app) {

    app.get("/api/scrape", function (req, res) {

        // Grabbing the whole html body with axios
        axios.get("http://www.echojs.com/").then(function(response) {
            var $ = cheerio.load(response.data);
            
            // Save an empty result object
            var result = {};

            // Now, we grab every h2 within an article tag, and do the following:
            $("article h2").each(function(i, element) {
            
            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this).children("a").text();
            result.link = $(this).children("a").attr("href");
    
            // Create a new Article using the `result` object built from scraping
            db.Article.create(result)
            .then(function(dbArticle) {
                // View the added result in the console
                console.log(dbArticle);
            }) 
            .catch(function(err) {
                // If an error occurred, log it
                console.log(err);
            });
    
        })
    })

});

}