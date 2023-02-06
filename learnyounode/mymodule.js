const fs = require('fs');

function readDirectory(directoryName, extension, callback) {
  const newExtension = '.' + extension;

  fs.readdir(directoryName, (err, files) => {
    if (err) return callback(err);

    const filteredFiles = files.filter(file => file.endsWith(newExtension));

    callback(null, filteredFiles);
  });
}

module.exports = readDirectory;