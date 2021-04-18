// ## Task 5: Game Loop

// Now that we have a fully functioning game, our next step is to have it run as many times
//as people would like to play without having to refresh the page.

// Use a `while loop` and `confirm`.

// This will be deemed as complete when a player can keep playing indefinitely and has the option
//to stop playing after every round.

// Plan
// - [x] Computer needs to select a new random number
// - [x] Create a function for computer to pick a random choice x
// - [x] Make random function run inside the computer wins function x
//          Hughes - When calling a function in a function you have to define the return information in the new function as it is not assigning it to anything so you can't use it!
//          Google - Called functions should go underneath
// - [x] Option to play the game again 
// - [x] Use a while loop to play the game again.
// - [x] Use a confirm to ask if the player would like to play again. If confirm = true play again.
//           Simon - confirm is already true so can just use if answer === false 

let result = 0;
let answer = true;

function getWinner() {
 while (answer === true) {
  let computerMove = computerPicks();
  let playerMove = prompt("Do you pick rock, paper or scissors?");
  if (playerMove === "paper" && computerMove === "rock") {
   result++;
  } else if (playerMove === "rock" && computerMove === "scissors") {
   result++;
  } else if (playerMove === "scissors" && computerMove === "paper") {
   result++;
  } else if (playerMove === "paper" && computerMove === "scissors") {
   result--;
  } else if (playerMove === "rock" && computerMove === "paper") {
   result--;
  } else if (playerMove === "scissors" && computerMove === "rock") {
   result--;
  }
  alert(
   "You picked " +
    playerMove +
    ". The computer picked " +
    computerMove +
    ". The score is: " +
    result
  );

  answer = confirm("Do you want to play again?");
  if (answer === false) {
   alert("Thank you for playing");
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
