// // ## Task 7: DOM

// // Refactor your application so that all interactions are through HTML elements in [index.html](index.html) 
// // rather than `confirm`, `alert` and `prompt`. Using the DOM allows our game to be event-driven, so you may want to 
// // remove the while loop and instead compute the winner when an event is fired.

// // This will be deemed as complete when `confirm`, `alert` and `prompt` are no longer used, user interaction is handled 
// // with HTML elements, and all the information is displayed on the page.

// -[x] Player Clicks on Image which is stored in event
// -[x] When player clicks on choice, Computer Picks their Random Choice
// -[x] Compare Player Choice to Computer
// -[x] If player wins increase You won text by 1 
// -[x] If player lost increase You lost text by 1 
// -[x] If player draw increase draw text by 1 
// -[x] When hit reset, change all numbers to 0 
// -[x] Clean up code

// DOM Variables

let result = 0;
let answer = true;
let gamesPlayed = 1;
let playerWins = 1;
let playerLosses = 1;
let draw = 1;
let playerMove; 
let computerMove


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
  computerMove = computerPicks()
  if (computerMove === "rock") {
    console.log("draw");
    drawIncrease();
  } else if (computerMove === "scissors") {
    console.log("player wins");
    playerScoreIncrease();
  } else if (computerMove === "paper" ) { 
    console.log("computer wins") 
    lossIncrease();
  }

    gamesScoreIncrease()
}

rockImage.addEventListener("click", playerRock);

//paper

let paperImage = document.querySelector("#paper");

function playerPaper(event) {

  console.log("player picks paper");
  console.log("computer picks " + computerMove);
  playerMove = "paper";
  computerMove = computerPicks()
  if (computerMove === "paper") {
    console.log("draw");
    drawIncrease();
  } else if (computerMove === "rock") {
    console.log("player wins");
    playerScoreIncrease();
  } else if (computerMove === "scissors" ) { 
    console.log("computer wins") 
    lossIncrease();
  }

    gamesScoreIncrease()
    
}

paperImage.addEventListener("click", playerPaper);

//scissors

let scissorsImage = document.querySelector("#scissors");

function playerScissors(event) {

  console.log("player picks scissors");
  console.log("computer picks " + computerMove);
  playerMove = "scissors";
  computerMove = computerPicks()
  if (computerMove === "scissors") {
    console.log("draw");
    drawIncrease();
  } else if (computerMove === "paper") {
    console.log("player wins");
    playerScoreIncrease();
  } else if (computerMove === "rock" ) { 
    console.log("computer wins") 
    lossIncrease();
  }

    gamesScoreIncrease()
  
}

scissorsImage.addEventListener("click", playerScissors);

// Scores 

function gamesScoreIncrease(){
  let gamesScore = document.querySelector("#score-games")
  result = gamesPlayed++;
  gamesScore.innerText =  result;
}

function playerScoreIncrease(){
    let playerScore = document.querySelector("#score-won")
    result = playerWins++;
    playerScore.innerText = result;
  }

  function drawIncrease(){
    let drawScore = document.querySelector("#score-draw")
    result = draw++;
    drawScore.innerText = result;
  }

  function lossIncrease(){
    let lostScore = document.querySelector("#score-lost")
    result = draw++;
    lostScore.innerText = result;
  }

  // When hit reset, change all numbers to 0 

  let playAgain = document.querySelector("#play-again");

