// ## Task 6: Scores

// Keep track of how many games have been played, as well as the number of wins, losses, and draws.
// This will be deemed as complete when this information is displayed after each round.
//
// Plan
// - [x] How many games have been played
// - Create a variable for games played x
// - If score increases by 1 add 1 to games played
// - [x] How many player wins
// - Create a variable for player wins
// - If score increases by 1 add 1 to player wins
// - [x] How many player losses
// - Create a variable for player losses
// - If score increases by 1 add 1 to player lossess
// - [x] How many draws
// - Create a variable for draw
// - Add code to alert draw
// - If draw increases by 1 add 1 to draw
// - [x] Display Information after each game
// - If player score increases by 1 add You Won and game information
// - If player losses increases by 1 add You Lost and game information
// - If player draw increases by 1 add Draw and game information
// - [x] Stop player entering wrong information

let result = 0;
let answer = true;
let gamesPlayed = 0;
let playerWins = 0;
let playerLosses = 0;
let draw = 0;

function getWinner() {
 while (answer === true) {
  gamesPlayed++;
  console.log(gamesPlayed);
  let computerMove = computerPicks();
  let playerMove = prompt("Do you pick rock, paper or scissors?");
  if (playerMove === "paper" && computerMove === "rock") {
   playerWins++;
   result++;
   alert(
    "You picked " +
     playerMove +
     "! The computer picked " +
     computerMove +
     "! \nYou have won this round!\n" +
     "\nTotal Score: \n**You Win: " +
     playerWins +
     "\n**Draw: " +
     draw +
     "\n**You Lost: " +
     playerLosses +
     "\nTotal Games: " +
     gamesPlayed
   );
  } else if (playerMove === "rock" && computerMove === "scissors") {
   playerWins++;
   result++;
   alert(
    "You picked " +
     playerMove +
     "! The computer picked " +
     computerMove +
     "! \nYou have won this round!\n" +
     "\nTotal Score: \n**You Win: " +
     playerWins +
     "\n**Draw: " +
     draw +
     "\n**You Lost: " +
     playerLosses +
     "\nTotal Games: " +
     gamesPlayed
   );
  } else if (playerMove === "scissors" && computerMove === "paper") {
   playerWins++;
   result++;
   alert(
    "You picked " +
     playerMove +
     "! The computer picked " +
     computerMove +
     "! \nYou have won this round!\n" +
     "\nTotal Score: \n**You Win: " +
     playerWins +
     "\n**Draw: " +
     draw +
     "\n**You Lost: " +
     playerLosses +
     "\nTotal Games: " +
     gamesPlayed
   );
  } else if (playerMove === "paper" && computerMove === "scissors") {
   playerLosses++;
   result--;
   alert(
    "You picked " +
     playerMove +
     "! The computer picked " +
     computerMove +
     "! \nYou have lost this round!\n" +
     "\nTotal Score: \n**You Win: " +
     playerWins +
     "\n**Draw: " +
     draw +
     "\n**You Lost: " +
     playerLosses +
     "\nTotal Games: " +
     gamesPlayed
   );
  } else if (playerMove === "rock" && computerMove === "paper") {
   playerLosses++;
   result--;
   alert(
    "You picked " +
     playerMove +
     "! The computer picked " +
     computerMove +
     "! \nYou have lost this round!\n" +
     "\nTotal Score: \n**You Win: " +
     playerWins +
     "\n**Draw: " +
     draw +
     "\n**You Lost: " +
     playerLosses +
     "\nTotal Games: " +
     gamesPlayed
   );
  } else if (playerMove === "scissors" && computerMove === "rock") {
   playerLosses++;
   result--;
   alert(
    "You picked " +
     playerMove +
     "! The computer picked " +
     computerMove +
     "! \nYou have lost this round!\n" +
     "\nTotal Score: \n**You Win: " +
     playerWins +
     "\n**Draw: " +
     draw +
     "\n**You Lost: " +
     playerLosses +
     "\nTotal Games: " +
     gamesPlayed
   );
  } else if (playerMove === "scissors" && computerMove === "scissors") {
   draw++;
   alert(
    "You picked " +
     playerMove +
     "! The computer picked " +
     computerMove +
     "! \nIt's a draw!\n" +
     "\nTotal Score: \n**You Win: " +
     playerWins +
     "\n**Draw: " +
     draw +
     "\n**You Lost: " +
     playerLosses +
     "\nTotal Games: " +
     gamesPlayed
   );
  } else if (playerMove === "rock" && computerMove === "rock") {
   draw++;
   alert(
    "You picked " +
     playerMove +
     "! The computer picked " +
     computerMove +
     "! \nIt's a draw!\n" +
     "\nTotal Score: \n**You Win: " +
     playerWins +
     "\n**Draw: " +
     draw +
     "\n**You Lost: " +
     playerLosses +
     "\nTotal Games: " +
     gamesPlayed
   );
  } else if (playerMove === "paper" && computerMove === "paper") {
   draw++;
   alert(
    "You picked " +
     playerMove +
     "! The computer picked " +
     computerMove +
     "! \nIt's a draw!\n" +
     "\nTotal Score: \n**You Win: " +
     playerWins +
     "\n**Draw: " +
     draw +
     "\n**You Lost: " +
     playerLosses +
     "\nTotal Games: " +
     gamesPlayed
   );
  } else alert("Please enter rock, paper or scissors!")

  answer = confirm("Do you want to play again?");
  if (answer === false) {
   alert(
    "***Thank you for playing***\nTotal Score: \n**You Win: " +
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
