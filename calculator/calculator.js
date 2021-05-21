//jshint exversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

   //making a calc using var
   var num1 = Number(req.body.n1);
   var num2 = Number(req.body.n2);

   //adding both variables in var named result
   var result = num1 + num2; 
    res.send("The result of your calculation is " + result +  ". and I need to drink water :)");
});

//added /our_team in localhost
app.get("/our_team", function(req, res){
    res.send("<button style='color:white; background:green; padding:10pt; border:none;'>Jane Doe</button><br><br><button style='color:white; background:green; padding:10pt; border:none;'>John Smith</button><br><br><button style='color:white; background:green; padding:10pt; border:none;'>Kesha</button>");

});

 
app.listen(4040, function(){
    console.log("Server is running on port 4040");
});