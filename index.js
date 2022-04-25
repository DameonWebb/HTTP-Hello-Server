// loads the http module
const http = require('http');
// create a web server that can send headers and a body response
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200,{ 
        'content-type': 'text/plain',
         })
        res.end('Hello World');
    }
});
//Add a listener so that your server will have a way to handle incoming connections
server.listen(8080, 'localhost', null, () => console.log('Listening on port 8080...')) 
//When the server starts: log a message so you will know where it is listening and the port number (3030, 3333, 8080, or 8000 are common)


