"use strict";

//input
const guess = document.querySelector(".guess");

//buttons
const check = document.querySelector(".check");
const again = document.querySelector(".again");

const message = document.querySelector(".message");
let score = 100;
let highscore = 0;

function randomNumberGenerator() {
  return Math.trunc(Math.random() * 20 + 1);
}

let secretNumber = randomNumberGenerator();
console.log(secretNumber);
check.addEventListener("click", function () {
  let number = Number(guess.value);

  //Invalid number case
  if (!number) {
    message.textContent = "⛔ No number provided";
  }
  //Wrong number case
  else if (number !== secretNumber) {
    number > secretNumber
      ? (message.textContent = "Hint: Too high ☝️!")
      : (message.textContent = "Hint: Too low 👇!");
  }
  //Correct number case
  else if (number === secretNumber) {
    message.textContent = "Correct, you win 🥳!";
  }
});
