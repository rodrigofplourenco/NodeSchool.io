const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, content) => {
  if (err) return console.error(err);
  
  const lines = content.split('\n');
  const numberOfBreakLines = lines.length - 1;

  console.log(numberOfBreakLines);
});