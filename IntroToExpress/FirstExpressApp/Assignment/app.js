var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("hi there, welcome to my assignment")
    
});

app.get("/speak/:animal",function(req,res){
    var animal = req.params.animal;
    console.log(req);
    if(animal=="pig"){
        res.send("The "+ animal+ " says Oink");
    }
    else if(animal=="cow"){
        res.send("The "+ animal+ " says Moo");
    }
    else{
        res.send("The "+ animal+ "says woof");
    }
    
});

app.get("/repeat/:repeatword/:number", function(req,res){
    var number = Number(req.params.number);
    var repeatword = req.params.repeatword;
    var buildupstring = String(" ");
    for(var i=0;i<number;i++){
        buildupstring = buildupstring + " "+ repeatword;
    }
    res.send(buildupstring);
});

app.get("*",function(req,res){
    res.send("Page not found");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
    res.render("friends", {friends: friends})
});