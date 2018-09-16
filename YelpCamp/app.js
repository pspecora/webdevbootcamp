var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("landing");
})

app.get("/campgrounds", function(req,res){
    var campgrounds = 
    [ 
    {name: "Salmon Creek", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f5c97ba6edb7bd_340.jpg"},
    {name: "Granite Mtn", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f5c97ba6edb7bd_340.jpg"},
    {name: "Walrus Hill", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f5c97ba6edb7bd_340.jpg"},
    {name: "Snakey Snake", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f5c97ba6edb7bd_340.jpg"},
        ]
        
    res.render("campgrounds", {campgrounds:campgrounds});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Started!");
    
});