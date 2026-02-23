const fs = require('fs');

// Create a read stream
const readStream = fs.createReadStream('largeFile.txt', {
  encoding: 'utf8'
});

// When data is received
readStream.on('data', (chunk) => {
  console.log('New chunk:');
  console.log(chunk);
});

// When reading is finished
readStream.on('end', () => {
  console.log('File reading completed.');
});

// If an error happens
readStream.on('error', (err) => {
  console.error('Error:', err.message);
});