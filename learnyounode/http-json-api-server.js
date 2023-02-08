const http = require('http');
const url = require('url');

const PORT = +process.argv[2];

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })

  const parsedUrl = url.parse(request.url, true)
  const requestUrl = parsedUrl.pathname;

  if(request.method === 'GET') {
    if (requestUrl == '/api/parsetime') {
      const { iso } = parsedUrl.query;
      const date = new Date(iso);

      response.end(JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      }));
    }
    else if (requestUrl == '/api/unixtime') {
      const { iso } = parsedUrl.query;
      const date = new Date(iso);

      const timestamp = date.getTime();

      response.end(JSON.stringify({
        unixtime: timestamp
      }));
    }
  }
});

server.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});