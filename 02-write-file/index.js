const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'output.txt');
const writableStream = fs.createWriteStream(filePath, { flags: 'a' });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter text: '
});

console.log('Welcome! Type your text below. Type "exit" or press Ctrl+C to quit.');

const handleInput = (input) => {
  if (input.trim().toLowerCase() === 'exit') {
    console.log('Goodbye!');
    rl.close();
  } else {
    writableStream.write(input + '\n');
    rl.prompt();
  }
};

rl.on('line', handleInput);

rl.on('close', () => {
  console.log('Exiting the program. Have a nice day!');
  writableStream.end();
  process.exit(0);
});

rl.prompt();