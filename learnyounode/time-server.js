const net = require('net');

const server = net.createServer((socket) => {
  const date = new Date();

  const year = date.getFullYear().toString().padStart(4, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const fullDate = `${year}-${month}-${day} ${hours}:${minutes}\n`;

  socket.end(fullDate);
});

server.listen(+process.argv[2]);