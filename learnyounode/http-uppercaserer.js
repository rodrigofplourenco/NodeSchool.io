const http = require('http');

const port = +process.argv[2];

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    let upperBody = [];

    request.on('data', (chunk) => {
      upperBody += chunk.toString().toUpperCase();
    });

    request.on('end', () => {
      response.end(upperBody);
    });
  }
});

server.listen(port);