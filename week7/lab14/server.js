var express = require('express');
var app = express();

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key:'uZSPSOwYvlxDlozYAsaOzZjzm',
  consumer_secret:'tbDr0eM3g6eRcwHRvjDBADwGRB1vISjOQ02OqZfd9imv9vSgNV',
  access_token_key:'975687067140272130-JQ3QDhVoT5lcf02m8qyouOmLvpXB1t2',
  access_token_secret:'ESReARvMa0tOXxgQmo5YYuMqQKUJAER56hmEhEvtXle56'
});

app.use(express.static('public'));

app.get('/',function(req, res){
    var params ={ screen_name:'nodejs' };
    
    client.get('statuses/user_timeline', params, function(error, tweets, response){
        if(!error){
            var output ="";
            
            for(var t =0; t < tweets.length; t++){
                output +="<div>";     
                output +="<h2>"+ tweets[t].user.screen_name +"<h2>";
                output +="<p>"+ tweets[t].text +"</p>";     
                output +="</div>";
            }
            res.send(output);
        }
    });
    
   
});

app.listen(8080);