const fs=require('fs')
const zlib=require('zlib');

const compressed='./data.txt.gz';
const decompressed='./data.txt';

const input=fs.createReadStream(compressed)
const output=fs.createWriteStream(decompressed)

input.pipe(zlib.createGunzip().pipe(output));
output.on('finish', () => {
    console.log("File decompressed!!");
});

