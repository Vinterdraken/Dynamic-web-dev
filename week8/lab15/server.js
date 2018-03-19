const MongoClient = require('mongodb').MongoClient;
const url ="mongodb://localhost:27017/star_wars_quotes";
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

var db;

MongoClient.connect(url, function(err, database){
    if(err) throw err;
    db = database; 
    app.listen(8080);
});

//Route 0
app.get('/', function(req, res){
   
});

//Display route
app.get('/all', function(req, res) {
    db.collection('quotes').find().toArray(function(err, result) {
        
        if (err) throw err;
        var output ="<h1>All the quotes</h1>";
        
        for (var i =0; i < result.length; i++) {                
            output += "<div><h3>"+ result[i].name +"</h3>";
            output += "<p>"+ result[i].quote +"</p></div>";            
        }
        //output += "<button href=\"add.html\">Add</button>"
        res.send(output);
        
    });
});

//Adding route
app.post('/addquotes', function(req, res){
    db.collection('quotes').save(req.body, function(err, result) {
        if (err) throw err;
        console.log('saved to database')
        res.redirect('/')
    });
});

//Filter route
app.post('/search', function(req, res) {
    db.collection('quotes').find(req.body).toArray(function(err, result) {
        
        if (err) throw err;
        var output ="<h1>All the quotes</h1>";
        
        for (var i =0; i < result.length; i++) {
            output +="<div><h3>"+ result[i].name +"</h3>";
            output +="<p>"+ result[i].quote +"</p></div>";
        }
        
        res.send(output);
    });
});

//Delete route
app.post('/delete', function(req, res) {
    db.collection('quotes').deleteOne(req.body, function(err, result) {
        if (err) throw err;
        res.redirect('/');
    });
});

//Update route
app.post('/update', function(req, res) {
    
    var query = { quote: req.body.quote };
    var newvalues = { $set: {name: req.body.newname, quote: req.body.newquote } };
    
    db.collection('quotes').updateOne(query,newvalues, function(err, result) {
        if (err) throw err;
        res.redirect('/');
    });
});