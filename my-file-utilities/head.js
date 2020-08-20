#!/usr/bin/env node
let fs = require("fs");
let array = process.argv;

if (array.length !== 3) {
  return "Needs exactly 1 argument";
}
let path = array[2];
// if (!fs.exists(path, cb)) {
//   console.log("Needs to be a file");
//   process.exit(17);
// }

fs.readFile(array[2], "utf-8", (err, data) => {

  if (err) {
    console.log(err);
    return;
  }

  let newArray = data.split("\n");
  for (let i = 0; i < 10; ++i) {
    console.log(newArray[i]);
  }
});
