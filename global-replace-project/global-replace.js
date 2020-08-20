function replace(sentence, word1, word2) {
  return sentence.split(word1).join(word2);
}

const fs = require('fs');



const TARGET_FILE = process.argv[2];
const OLD_STR = process.argv[3];
const NEW_STR = process.argv[4];


fs.readFile(TARGET_FILE, 'utf8', (error, data) => {
  fs.writeFile(TARGET_FILE, replace(data, OLD_STR, NEW_STR), 'utf8', (error) => {
    if (error) {
      console.log('OH NO!');
    }
    console.log('DONE');
  });
});
