function returnsThree() {
  return 3;
}
function reciprocal(n) {
  if (typeof n !== "number") {
    throw new TypeError("Must be a number");
  }
  if (n < 1 || n > 100000000) {
    throw new TypeError("Must be in range.");
  }
  return 1 / n;
}

module.exports = { returnsThree, reciprocal };
