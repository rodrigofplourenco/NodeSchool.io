const readDirectory = require('./mymodule.js');

const pathToDir = process.argv[2];
const extension = process.argv[3];

readDirectory(pathToDir, extension, (err, filteredFiles = null) => {
  if (err) return console.error(err);

  console.log(filteredFiles.join('\n'));
});