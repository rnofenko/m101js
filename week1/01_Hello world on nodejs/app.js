var http = require('http');
var server = http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("hello, web world");
});

server.listen(8000);
console.log('my server at localhost://8000')