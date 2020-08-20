let HumanPlayer = require("./humanPlayer");
let Board = require("./board");
class Game {
  constructor(human, board) {
    this.complete = false;
    this.winCount = 0;
    this.human = human;
    this.board = board;
  }
  play() {
    if (this.complete === false) {
      this.playTurn();
    }
    else {
      console.log("Game over");
    }
  }
  playTurn() {
    let x = this.human.getX();
    let y = this.human.getY();
    this.attack(x, y);
    if (this.winCount === 3) {
      this.complete = true;
    }
  }
  attack(x, y) {
    if (this.board.inspectXY(x, y) === null) {
      this.board.setXY(x, y, "O");
      this.displayStatus();
    }
    else if (this.board.inspectXY(x, y) === "s") {
      this.board.setXY(x, y, "x");
      this.winCount++;
      this.displayStatus();
    }
  }
  displayStatus() {
    this.board.display();
    console.log("You've hit " + this.winCount + " ships!");
  }
}
module.exports = Game;
