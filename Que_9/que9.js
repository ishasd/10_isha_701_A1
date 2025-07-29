var fs = require('fs');

fs.writeFile('./files/dataFile.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('file Created..');
}); 

fs.appendFile('./files/dataFile.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Appended!!');
}); 

fs.readFile('./files/dataFile.txt', 'utf-8',   function (err,data) {
  if (err) throw err;
  console.log("File read="+data);
});

fs.rename('./files/dataFile.txt', './files/data.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

fs.unlink('./files/data.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});