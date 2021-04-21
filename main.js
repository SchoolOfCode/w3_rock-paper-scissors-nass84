// // ## Task 7: DOM

// // Refactor your application so that all interactions are through HTML elements in [index.html](index.html) 
// // rather than `confirm`, `alert` and `prompt`. Using the DOM allows our game to be event-driven, so you may want to 
// // remove the while loop and instead compute the winner when an event is fired.

// // This will be deemed as complete when `confirm`, `alert` and `prompt` are no longer used, user interaction is handled 
// // with HTML elements, and all the information is displayed on the page.

// -[x] Player Clicks on Image which is stored in event
// -[x] When player clicks on choice, Computer Picks their Random Choice
// Pick Rock First 
// -[x] Compare Player Choice to Computer
// -[] If player wins increase You won text by 1 
// -[] If player lost increase You lost text by 1 
// -[] If player draw increase draw text by 1 
// -[] When hit play again increase games played by 0 
// -[] When hit reset, change all numbers to 0 


// If player clicks on rock image, set player move to rock
// If player clicks on scissors image, set player move to scissors
// If player clicks on paper image, set player move to paper



function computerPicks() {
 let choice = ["rock", "paper", "scissors"];

 let random = Math.floor(Math.random() * choice.length);

 computerChoice = (random, choice[random]);

 let computerMove = computerChoice;

 return computerMove;
}


let result = 0;
let answer = true;
let gamesPlayed = 0;
let playerWins = 0;
let playerLosses = 0;
let draw = 0;
let playerMove; 
let computerMove

function getWinner() {
 while (answer === true) {
  gamesPlayed++;
  console.log(gamesPlayed);
  computerMove = computerPicks();
  playerMove = prompt("Do you pick rock, paper or scissors?");
  if (playerMove === "paper" && computerMove === "rock") {
   playerWins++;
   result++;
   alertScore("won");
  } else if (playerMove === "rock" && computerMove === "scissors") {
   playerWins++;
   result++;
   alertScore("won");
  } else if (playerMove === "scissors" && computerMove === "paper") {
   playerWins++;
   result++;
   alertScore("won");
  } else if (playerMove === "paper" && computerMove === "scissors") {
   playerLosses++;
   result--;
   alertScore("lost");
  } else if (playerMove === "rock" && computerMove === "paper") {
   playerLosses++;
   result--;
   alertScore("lost");
  } else if (playerMove === "scissors" && computerMove === "rock") {
   playerLosses++;
   result--;
   alertScore("lost");
  } else if (playerMove === "scissors" && computerMove === "scissors") {
   draw++;
   alertScore("drawn");
  } else if (playerMove === "rock" && computerMove === "rock") {
   draw++;
   alertScore("drawn");
  } else if (playerMove === "paper" && computerMove === "paper") {
   draw++;
   alertScore("drawn");
  } else {
   alert("Please enter rock, paper or scissors!");
  }

  answer = confirm("Do you want to play again?");
  if (answer === false) {
   alert(
    "***Thank you for playing***\nTotal Score: \n**You Won: " +
     playerWins +
     "\n**Draw: " +
     draw +
     "\n**You Lost: " +
     playerLosses +
     "\nTotal Games: " +
     gamesPlayed
   );
  }
 }
}

function computerPicks() {
 let choice = ["rock", "paper", "scissors"];

 let random = Math.floor(Math.random() * choice.length);

 computerChoice = (random, choice[random]);

 let computerMove = computerChoice;

 return computerMove;
}

function alertScore(frog) {
 alert(
  "You picked " +
   playerMove +
   "! The computer picked " +
   computerMove +
   "! \nYou have " +
   frog +
   " this round!\n" +
   "\nTotal Score: \n**You Win: " +
   playerWins +
   "\n**Draw: " +
   draw +
   "\n**You Lost: " +
   playerLosses +
   "\nTotal Games: " +
   gamesPlayed
 );
}

//make images be events
//rock

let rockImage = document.querySelector("#rock");


function playerRock(event) {

  console.log("player picks rock");
  playerMove = "rock";
  computerMove = computerPicks()
  if (computerMove === "rock") {
    console.log("draw");
} else if (computerMove === "scissors") {
    console.log("player wins");
} else if (computerMove === "paper" ) { 
    console.log("computer wins") }
}

rockImage.addEventListener("click", playerRock);

//paper

let paperImage = document.querySelector("#paper");

function playerPaper(event) {

  console.log("player picks paper");
  

  
}

paperImage.addEventListener("click", playerPaper);

//scissors

let scissorsImage = document.querySelector("#scissors");

function playerScissors(event) {

  console.log("player picks scissors");
  
}

scissorsImage.addEventListener("click", playerScissors);
