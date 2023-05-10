let fs = require('fs');
const path = require('path');
const chunk = path.join(__dirname, 'text.txt');
const stream = fs.createWriteStream(chunk, 'utf8');
const { stdin, stdout, exit } = process;

process.on('exit', () => stdout.write('See you soon!'));

stdout.write('Hi! Enter a something... ' + '\n');

stdin.on('data', (data) => {
  
    let text = data.toString();
  
    if (text.trim().toLowerCase() === 'exit') exit();
  
    stream.write(text);
  
  });

