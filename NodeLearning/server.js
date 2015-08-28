var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Node.js\n');
}).listen(port);
console.log("listening at http://127.0.0.1:1337");