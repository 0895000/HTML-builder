const fs = require('fs');

const pathToFile = 'text.txt';
const data = fs.readFileSync(pathToFile, { encoding: 'utf-8', flag: 'r' });
console.log(data);