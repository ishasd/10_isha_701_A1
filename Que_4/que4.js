const fs=require('fs')
const zlib=require('zlib');

const file='./data.txt';
const compressed='./data.txt.gz';

const input=fs.createReadStream(file)
const output=fs.createWriteStream(compressed)

input.pipe(zlib.createGzip().pipe(output));

console.log("file compressed!!")

