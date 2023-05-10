let fs = require('fs');
let fileContent = '';
const path = require('path');
const chunk = path.join(__dirname, 'text.txt');
const stream = fs.createReadStream(chunk, 'utf8');

stream.on('readable', function() {
    fileContent = stream.read();
    if (fileContent != null) console.log(fileContent);
    });
    stream.on('error', function(err) {
    console.log('Error', err.message);
});


