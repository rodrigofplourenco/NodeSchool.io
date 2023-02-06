const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
  let allData = '';

  response.on('data', (data) => {
    allData += data.toString();
  });

  response.on('end', () => {
    console.log(allData.length);
    console.log(allData);
  });
});
