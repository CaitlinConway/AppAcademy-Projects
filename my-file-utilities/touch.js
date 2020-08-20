#!/usr/bin/env node
let fs = require("fs");
let array = process.argv;

if (array.length !== 3) {
  return "Add 1 argument "
}
if (array[2].isDirectory) {
  console.log('Can\'t be a directory!');
  process.exit(2);
}

const cb = e => {
  console.log(e);
}

fs.appendFile(array[2], '', cb);
