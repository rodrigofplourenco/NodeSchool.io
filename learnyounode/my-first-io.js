const fs = require('fs');

const pathToFile = process.argv[2];
const fileContent = fs.readFileSync(pathToFile).toString();
const lines = fileContent.split('\n');
const numberOfLines = lines.length - 1;

console.log(numberOfLines);