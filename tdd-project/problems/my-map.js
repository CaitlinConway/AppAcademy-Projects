function myMap(array, cb) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }
  return newArray;
}
function double(n) {
  return n * 2;
}
module.exports = { myMap, double };
