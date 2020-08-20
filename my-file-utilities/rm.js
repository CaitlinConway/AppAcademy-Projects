#!/usr/bin/env node
let fs = require("fs");

let array = process.argv;
if (array.length < 3) {
  return "Add arguments.";
}
let callback = function (error) {
  console.log(error);
};

let newArray = array.slice(2);
newArray.forEach((element) => {
  fs.unlink(element, callback);
});
