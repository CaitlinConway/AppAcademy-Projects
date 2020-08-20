const http = require('http');

http.createServer(function (request, response) {
  if (request.url === '/200') {
    response.writeHead(200, { 'Content-Type': 'text/HTML' });
    response.write('<h1>OK</h1>');
    response.end();
  }
  else if (request.url === '/400') {
    console.log("Bad request");
    response.writeHead(400);
    response.end();
  }
  else if (request.url === '/201') {
    console.log("Created");
    response.writeHead(201);
    response.end();
  }
  else if (request.url === '403') {
    console.log("Forbidden");
    response.writeHead(401);
    response.end();
  }
  else if (request.url === "/302") {
    console.log("Found")
    response.writeHead(302)
    response.end();
  }
  else if (request.url === '/504') {
    console.log("Gateway-timeout");
    response.writeHead(504);
    response.end();
  }
  else if (request.url === "/500") {
    console.log("Internal-Server-Error")
    response.writeHead(500)
    response.end();
  }
  else if (request.url === '/301') {
    console.log("Moved-Permanently");
    response.writeHead(301);
    response.end();
  }
  else if (request.url === "/401") {
    console.log("Unauthorized")
    response.writeHead(401)
    response.end();
  }
  else {
    response.writeHead(404);
    response.end();
  }
}).listen(3000, function () {
  console.log('Listening on port 3000....');
})
