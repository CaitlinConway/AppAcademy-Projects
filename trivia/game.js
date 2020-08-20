import { getClue as getClueFromCallback } from './callback-version.js';
import { getClue as getClueFromPromise } from './promise-version.js';
import { getClue as getClueFromAsyncFunction } from './async-await-version.js';

let useCallbackButton = document.getElementById("use-callback");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let value = document.getElementById("value");
let categoryTitle = document.getElementById("categoryTitle");
let invalidCount = document.getElementById("invalid-count");
let usePromise = document.getElementById("use-promise");
let asyncButton = document.getElementById("use-async-await");
let checkResponse = document.getElementById('check-response');
let playerResponse = document.getElementById('player-response');
let score = document.getElementById("score");
let playerScore = 0;

useCallbackButton.addEventListener("click", () => {
  getClueFromCallback((error, clue) => {
    if (error !== null) {
      console.error(error);
    }
    else {
      changeInnerHTML(clue);
    }
  });
  checkResponse.classList.remove("is-hidden");
  playerResponse.value = "";
})

usePromise.addEventListener("click", () => {
  getClueFromPromise()
    .then(clue => {
      changeInnerHTML(clue);
    })
    .catch(error => {
      console.log(error.message);
    })
  checkResponse.classList.remove("is-hidden");
  playerResponse.value = "";
});

asyncButton.addEventListener("click", async () => {
  try {
    let clue = await getClueFromAsyncFunction();
    changeInnerHTML(clue);
  }
  catch (error) {
    console.log(error.message);
  }
  checkResponse.classList.remove("is-hidden");
  playerResponse.value = "";
});

checkResponse.addEventListener("click", () => {
  if (playerResponse.value.trim() === answer.innerHTML.trim()) {
    playerScore += Number(value.innerHTML);
    score.innerHTML = playerScore;
  }
  else {
    playerScore -= Number(value.innerHTML);
    score.innerHTML = playerScore;
  }
  answer.classList.remove("is-hidden");
  checkResponse.classList.add("is-hidden");
})

function changeInnerHTML(clue) {
  answer.classList.add("is-hidden");
  question.innerHTML = clue.question;
  answer.innerHTML = clue.answer;
  value.innerHTML = clue.value;
  categoryTitle.innerHTML = clue.categoryTitle;
  if (clue.invalidCount > 0) {
    invalidCount.innerHTML = "invalid";
  }
  else {
    invalidCount.innerHTML = "valid";
  }
}
