// ## Task 8: Validation

// Create a username `input` field and use the username the player inputs in the game so that a player can see their name on the page when looking at where the scores are displayed.

// To make it more uniform, restrict the number of characters a username can be to 10 or fewer.

// This will be deemed as complete when the users cannot enter a username longer than 10 characters.

// 🌟 BONUS: Make it so that valid usernames should only start with letters, not numbers or symbols.
// 🌟 EXTRA BONUS: Make it so that the first letter of the username should be capitalised.

//Plan
//  -[x] Create an input field
//  -[x] Make input replace player text
//  -[x] Restrict username to be less than 10 characters
//  -[x] Username should be capitalised
//  -[ ] Make username only start with letters,  not numbers or symbols.

// Create an input field
// Make input replace player text

let you = document.querySelectorAll(`.you`);
const textButton = document.querySelector(`#text-button`);
let inputtedWord = document.getElementById("changeText");

function changeHeading() {
 for (let i = 0; i < you.length; i++) {
  you[i].innerText = document.getElementById("changeText").value;
 }
}

textButton.addEventListener("click", changeHeading);

// Restrict username to be less than 10 characters
// maxlength in html

// Make username only start with letters
// Username should be capitalised

// 1. Function that capitalises the first letter of a word
// 2. Take in a word
// 3. Change the word to lowercase
// 4. Change the first letter to be capital letter
// 5. Return the word

function capitalise(word) {
 let lowerCaseWord = word.toLowerCase();
 let upperCaseLetter = lowerCaseWord[0];
 lowerCaseWord = lowerCaseWord.substring(1);
 upperCaseLetter = upperCaseLetter.toUpperCase();
 let capitaliseWord = upperCaseLetter + lowerCaseWord;

 return capitaliseWord;
}

inputtedWord.addEventListener(
 "blur",
 (e) => (e.target.value = capitalise(e.target.value))
);


// Make input replace player text

// DOM Variables

let result = 0;
let answer = true;
let gamesPlayed = 1;
let playerWins = 1;
let playerLosses = 1;
let draw = 1;
let playerMove;
let computerMove;

// Player Clicks on Image which is stored in event
// When player clicks on choice, Computer Picks their Random Choice

function computerPicks() {
 let choice = ["rock", "paper", "scissors"];

 let random = Math.floor(Math.random() * choice.length);

 computerChoice = (random, choice[random]);

 let computerMove = computerChoice;

 return computerMove;
}

// Compare Player Choice to Computer
// If player wins increase You won text by 1
// If player lost increase You lost text by 1
// If player draw increase draw text by 1
// Number of games increase

// Rock

let rockImage = document.querySelector("#rock");

function playerRock(event) {
 console.log("player picks rock");
 console.log("computer picks " + computerMove);
 playerMove = "rock";
 computerMove = computerPicks();
 if (computerMove === "rock") {
  console.log("draw");
  drawIncrease();
 } else if (computerMove === "scissors") {
  console.log("player wins");
  playerScoreIncrease();
 } else if (computerMove === "paper") {
  console.log("computer wins");
  lossIncrease();
 }

 gamesScoreIncrease();
}

rockImage.addEventListener("click", playerRock);

//paper

let paperImage = document.querySelector("#paper");

function playerPaper(event) {
 console.log("player picks paper");
 console.log("computer picks " + computerMove);
 playerMove = "paper";
 computerMove = computerPicks();
 if (computerMove === "paper") {
  console.log("draw");
  drawIncrease();
 } else if (computerMove === "rock") {
  console.log("player wins");
  playerScoreIncrease();
 } else if (computerMove === "scissors") {
  console.log("computer wins");
  lossIncrease();
 }

 gamesScoreIncrease();
}

paperImage.addEventListener("click", playerPaper);

//scissors

let scissorsImage = document.querySelector("#scissors");

function playerScissors(event) {
 console.log("player picks scissors");
 console.log("computer picks " + computerMove);
 playerMove = "scissors";
 computerMove = computerPicks();
 if (computerMove === "scissors") {
  console.log("draw");
  drawIncrease();
 } else if (computerMove === "paper") {
  console.log("player wins");
  playerScoreIncrease();
 } else if (computerMove === "rock") {
  console.log("computer wins");
  lossIncrease();
 }

 gamesScoreIncrease();
}

scissorsImage.addEventListener("click", playerScissors);

// Scores

function gamesScoreIncrease() {
 let gamesScore = document.querySelector("#score-games");
 result = gamesPlayed++;
 gamesScore.innerText = result;
}

function playerScoreIncrease() {
 let playerScore = document.querySelector("#score-won");
 result = playerWins++;
 playerScore.innerText = result;
}

function drawIncrease() {
 let drawScore = document.querySelector("#score-draw");
 result = draw++;
 drawScore.innerText = result;
}

function lossIncrease() {
 let lostScore = document.querySelector("#score-lost");
 result = draw++;
 lostScore.innerText = result;
}

// When hit reset, change all numbers to 0

let playAgain = document.querySelector("#play-again");


