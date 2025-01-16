const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  process.stdout.write(chunk);
});

readStream.on('error', (err) => {
  console.error('An error occurred while reading the file:', err.message);
});

readStream.on('end', () => {
  console.log('\nFile reading completed.');
});