var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req, res){
    res.send("Hello world! by express");            
});app.listen(8080);

app.get('/joke',function(req, res){
    var oneLinerJoke = require('one-liner-joke'); 
    var randomJoke = oneLinerJoke.getRandomJoke();
    res.send(randomJoke.body);
});

app.get('/calc', function(req, res){
    var x = parseInt(req.query.x); 
    var y = parseInt(req.query.y);
    var op = req.query.op;   
        
    switch(op){
        case 'add':
            res.send("X + Y = "+(x+y));
            break;
        case 'sub':
            res.send("X - Y = "+(x-y));
            break;
        case 'mul':
            res.send("X * Y = "+(x*y));
            break;
        case 'div':
            res.send("X / Y = "+(x/y));
            break;        
    }
});

app.get('/getform', function(req, res){ 
var name = req.query.name; 
var quest = req.query.quest; 
   res.send("Hi "+name+" I am sure you will "+quest) ; 
});