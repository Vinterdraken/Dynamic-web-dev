var http = require('http');
var cuurentDate = require('./myModule');

http.createServer(function(req, res) { 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + cuurentDate.myDateTime());
    res.end('Hello World!'); 
}).listen(8080);