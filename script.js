"use strict";

//input
const guess = document.querySelector(".guess");

//buttons
const check = document.querySelector(".check");
const again = document.querySelector(".again");

const secretNumberContainer = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreContainer = document.querySelector(".score");
const highscoreContainer = document.querySelector(".highscore");
const body = document.querySelector("body");

let maxScore = 100;
let score = maxScore;
let highscore = 0;
let negativeScore = 0;

function randomNumberGenerator() {
  return Math.trunc(Math.random() * 20 + 1);
}

const updateScore = function (negative = 0) {
  negativeScore += negative;
  console.log(negativeScore);
  score = maxScore -= negativeScore;
  score > 0
    ? (scoreContainer.textContent = score)
    : (scoreContainer.textContent = 0);
  return score;
};

const displayMessage = function (text) {
  message.textContent = text;
};

let secretNumber = randomNumberGenerator();
console.log(secretNumber);

check.addEventListener("click", function () {
  let number = Number(guess.value);
  //When player has score
  if (score > 1) {
    console.log("new secret number:", secretNumber);
    //Invalid number case
    if (!number) {
      displayMessage("⛔ No number provided");
      updateScore(1);
      console.log(score);
    }
    //Wrong number case
    else if (number !== secretNumber) {
      number > secretNumber
        ? displayMessage("Hint: Too high ☝️!")
        : displayMessage("Hint: Too low 👇!");
      updateScore(2);
    }
    //Correct number case
    else if (number === secretNumber) {
      displayMessage("Correct, you win 🥳! New game?");
      secretNumberContainer.textContent = secretNumber;
      check.classList.add("disabled");
      again.classList.remove("hidden");
      body.style.backgroundColor = "#60b347";
      if (score > highscore) {
        highscoreContainer.textContent = score;
        highscore = score;
      }
    }
  }
  //When player lose
  else {
    check.classList.add("disabled");
    check.disabled = true;
    again.classList.remove("hidden");
    secretNumberContainer.textContent = secretNumber;
    displayMessage("Wrong numbers! Start again");
    scoreContainer.textContent = 0;
    body.style.backgroundColor = "red";
  }
});

again.addEventListener("click", function () {
  //Reset scores
  maxScore = 100;
  negativeScore = 0;
  score = maxScore;

  check.classList.remove("disabled");
  check.disabled = false;
  again.classList.add("hidden");
  secretNumberContainer.textContent = "?";
  secretNumber = randomNumberGenerator();
  displayMessage("New game, good luck!");
  scoreContainer.textContent = maxScore;
  body.style.backgroundColor = "#222";
});
