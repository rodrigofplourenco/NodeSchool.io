const fs = require('fs');

const pathToDir = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(pathToDir, (err, files) => {
  if (err) return console.error(err);

  const filteredFiles = files.filter(file => file.endsWith(extension));

  console.log(filteredFiles.join('\n'));
});