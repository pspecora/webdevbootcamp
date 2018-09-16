var express = require("express");

var app = express();

app.get("/", function(req,res){
   res.send("hi there!"); 
});

app.get("/bye", function(req,res){
   res.send("goodbye!"); 
});

app.get("/dog", function(req,res){
   res.send("meow"); 
});

app.get("*", function(req, res))
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});