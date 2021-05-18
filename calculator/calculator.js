//jshint exversion:6
const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<button>Click</button>");
});

app.get("/contact", function(req, res){
    res.send("<p>You can contact on: meenaxjha@gmail.com");
});

app.get("/about", function(req, res){
    res.send("<p>This is an express.js server");
});

app.listen(4040, function(){
    console.log("Server is running on port 4040");
});