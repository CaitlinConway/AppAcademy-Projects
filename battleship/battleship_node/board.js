class Board {
  constructor() {
    this.grid = [[null, null, null], [null, null, null], [null, null, null]];
  }
  display() {
    for (let i = 0; i < this.grid.length; ++i) {
      console.log(this.grid[i] + "\n");
    }
  }
  count() {
    let count = 0;
    this.grid.forEach((ele) => {
      if (ele.includes("s")) {
        count++;
      }
    });
    return count;
  }
  populateGrid() {
    let indexRow = randomNum(2);
    let indexColumn = randomNum(2);
    let sCount = 0;
    while (sCount < 3) {
      if (this.grid[indexRow][indexColumn] === null) {
        this.grid[indexRow][indexColumn] = "s";
        sCount++;
      }
      else {
        indexRow = randomNum(2);
        indexColumn = randomNum(2);
      }
    }
  }
  inspectXY(x, y) {
    return this.grid[x][y];
  }
  setXY(x, y, newValue) {
    this.grid[x][y] = newValue;
  }
}
function randomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


module.exports = Board;
