#!/usr/bin/env node
fs = require("fs");
let array = process.argv;

if (array.length !== 4) {
  console.log('You need two arguments!');
}
if (array[2] === null) {
  console.log('Needs a source file!')
  process.exit(9);
}
if (array[2].isDirectory) {
  console.log('Can\'t be a directory!');
  process.exit(10);
}
fs.copyFile(array[2], array[3], callback);
function callback(e) {
  console.log(e);
}
