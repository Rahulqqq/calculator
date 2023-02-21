//jshint esversion:8
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// for calculator

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){

    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);

    let result = num1 + num2;

        res.send("The result of calculation is " + result);
});

// For BMI Calculator

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req,res){
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    
    let bmi = weight / (height*height);

    res.send("Your BMI is" + bmi);

// server start on port 3000.

});
app.listen(3000, function(){
    console.log("server started on port 3000")

    })



