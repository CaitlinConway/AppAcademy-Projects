const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let randomInRange = function (min, max) {
  let minNum = Math.ceil(min);
  let maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
}

let checkGuess = function (n) {
  let num = Number(n);
  if (num > secretNumber) {
    console.log('Too high.');
    return false;
  }
  if (num < secretNumber) {
    console.log('Too low.');
    return false;
  }
  console.log('Correct!')
  return true;
}




let askGuess = function () {
  rl.question('Enter a guess: ', (answer) => {
    let right = checkGuess(Number(answer));
    if (right === true) {
      rl.close();
    } else {
      askGuess();
    }
  })

}

let askRange = function () {
  rl.question("Enter a max number: ", (answer1) => {
    rl.question("Enter a min number: ", (answer2) => {
      console.log("I'm thinking of a number between " + answer2 + " and " + answer1);
      secretNumber = randomInRange(Number(answer2), Number(answer1));
      askGuess();
    });
  });
}
askRange();
