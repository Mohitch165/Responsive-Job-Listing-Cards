const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { json } = require('body-parser');
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.locals.localData;
app.locals.filter;
localData = require("./data.json");
var searchInput, role, level, language, tools;

app.get("/", function(req, res){
    res.render("homepage", { localData });
});

app.post("/search", function(req, res){
    searchInput = req.body;
    role = searchInput.role;
    level = searchInput.level;
    language = searchInput.language;
    tools = searchInput.tools;
    res.redirect("/results");
    console.log(searchInput);
});

app.get("/results", function(req, res){
    localData = require("./data.json");

     filter = localData.filter(function (e) {
        return e.role.toLowerCase() === role.toLowerCase();
    });
    res.render("results", {filter});
});

app.listen(process.env.PORT, function(){
    console.log("Sever Started Successfully");
});