const readline = require('readline');

const fs = require('fs');

fs.readFile('forbidden-dictionary.txt', 'utf8', (err, data) => {

})




const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Enter a sentence to be censored: ", (answer) => {
  fs.readFile('forbidden-dictionary.txt', 'utf8', (err, data) => {
    console.log(censorSentence(answer, data));
  });
  rl.close();
})


let starVowels = function (word) {
  let string = "";
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < word.length; ++i) {
    if (vowels.includes(word[i])) {
      string += "*";
    }
    else {
      string += word[i];
    }
  }
  return string;
}

let censorSentence = function (sentence, array) {
  let newArray = sentence.split(" ");
  let res = [];
  for (let i = 0; i < newArray.length; ++i) {
    let word = newArray[i];
    if (array.includes(word)) {
      res.push(starVowels(word));
    }
    else {
      res.push(word);
    }
  }
  return res.join(" ");
}
