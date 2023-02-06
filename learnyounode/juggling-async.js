const http = require('http');

const firstUrl = process.argv[2];
const secondUrl = process.argv[3];
const thirdUrl = process.argv[4];

http.get(firstUrl, (response) => {
  let firstUrlData = '';
  let secondUrlData = '';
  let thirdUrlData = '';

  response.on('data', (data) => {
    firstUrlData += data.toString();
  });

  response.on('end', () => {
    http.get(secondUrl, (response2) => {
      response2.on('data', (data2) => {
        secondUrlData += data2.toString();
      });

      response2.on('end', () => {
        http.get(thirdUrl, (response3) => {
          response3.on('data', (data3) => {
            thirdUrlData += data3.toString();
          });

          response3.on('end', () => {
            console.log(firstUrlData);
            console.log(secondUrlData);
            console.log(thirdUrlData);
          });
        });
      });
    });
  });
});