const fs=require('fs');
const util=require('util');
const unlinkFile=util.promisify(fs.unlink);
fs.writeFile('demoFile.txt', 'This is Temporary File Creation', function (err) {
  if (err) throw err;
  console.log('File Created...');
}); 

unlinkFile('demoFile.txt')
  .then(() => {
    console.log('File Deleted...');
  })
  .catch((err) => {            
    console.error('Error deleting file:', err);
  });
console.log('File Deletion Process Started...');