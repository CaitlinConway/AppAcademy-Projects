const readline = require('readline');
let HumanPlayer = require("./humanPlayer");
let Board = require("./board");
let Game = require("./game");

const rl = readline.createInterface(process.stdin, process.stdout);

// rl.question is an asynchronous function!!
let human = new HumanPlayer(0, 0);
let newBoard = new Board();
newBoard.populateGrid();
let newGame = new Game(human, newBoard);

function askCoordinate() {
  if (!newGame.complete) {
    rl.question("What is the x coordinate of your move?", answer => {
      human.setX(answer);
      rl.question("What is the y coordinate of your move?", answer => {
        human.setY(answer);
        newGame.play();
        askCoordinate();
      });
    });
  }
  else {
    rl.close();
    console.log("Game over");
  }
}
askCoordinate();
// rl.close() // if want to close the game
