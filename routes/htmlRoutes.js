module.exports = function(router) {
    // homepage
    router.get("/", function(req, res){
        res.render("index");
    });
    // handlebars page
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}