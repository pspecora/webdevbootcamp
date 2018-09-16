// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

// Search with Movie ID: 

var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("search")
})

app.get("/request", function(req,res){
    console.log(req.query.search);
    var query = req.query.search;
    var url = 'http://www.omdbapi.com/?s='+ query + '&apikey=thewdb'
    
    request(url, function(error,response,body){
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});