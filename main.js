// ## Task 9: Style, Animation and User Experience

// Use CSS to add some style, flair, and animation to the playing experience on the page. Be creative! ✨ Keep in mind your user and make their experience as easy and enjoyable as possible.


// -[] Add media queries for larger screens
// -[x] Increase input size in text box
// -[x] Add who won 
// -[x] Replace pictures with wrestlers
// -[x] Change wording on HTML
// -[x] Change wording on JS
// -[x] Change background 
// -[x] Change colour of table
// -[x] Change colour of button
// -[] Add sound on name click 
// -[] Add gif in between rounds
// -[] Change wording in the Win to famous quotes 



// DOM Variables

let result = 0;
let answer = true;
let gamesPlayed = 1;
let playerWins = 1;
let playerLosses = 1;
let draw = 1;
let playerMove;
let computerMove;
let displayComputerChoice = document.getElementById("computer-pick");

// Player Clicks on Image which is stored in event
// When player clicks on choice, Computer Picks their Random Choice

function computerPicks() {
 let choice = ["Wrestler", "Sumo", "Samurai"];

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
 playerMove = "Wrestler";
 computerMove = computerPicks();
 if (computerMove === "Wrestler") {
  console.log("draw");
  drawIncrease();
 } else if (computerMove === "Samurai") {
  console.log("player wins");
  playerScoreIncrease();
 } else if (computerMove === "Sumo") {
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
 playerMove = "Sumo";
 computerMove = computerPicks();
 if (computerMove === "Sumo") {
  console.log("draw");
  drawIncrease();
 } else if (computerMove === "Wrestler") {
  console.log("player wins");
  playerScoreIncrease();
 } else if (computerMove === "Samurai") {
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
 playerMove = "Samurai";
 computerMove = computerPicks();
 if (computerMove === "Samurai") {
  console.log("draw");
  drawIncrease();
 } else if (computerMove === "Sumo") {
  console.log("player wins");
  playerScoreIncrease();
 } else if (computerMove === "Wrestler") {
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
 displayComputerChoice.innerText = "You picked " + playerMove + "! The computer picked " + computerMove + "!" + "\nVICTORY IS YOURS!!!!!";
}

function drawIncrease() {
 let drawScore = document.querySelector("#score-draw");
 result = draw++;
 drawScore.innerText = result;
 displayComputerChoice.innerText = "You picked " + playerMove + "! The computer picked " + computerMove + "!" + "\nDRAW!!!!!";
}

function lossIncrease() {
 let lostScore = document.querySelector("#score-lost");
 result = playerLosses++;
 lostScore.innerText = result;
 displayComputerChoice.innerText = "You picked " + playerMove + "! The computer picked " + computerMove + "!" + "\nYOU HAVE BEEN DEFEATED!";
}

// When hit reset, change all numbers to 0

let playAgain = document.querySelector("#play-again");

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

// -[] Add computer choice visually 
// . make a place to display the text 
// . make a function that displays computer choice
// . add function to rock, paper, scissors


