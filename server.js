const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    if  (req.url == "/shoes") {
        res.end("Yellow shoe");
    }else if (req.url == "/users") {
        res.end("All User Data");
    } else{
        res.end("Hello Server");
    }
})

server.listen(5500, "127.0.0.1", () => {
    console.log('Server is running from 5500');
})