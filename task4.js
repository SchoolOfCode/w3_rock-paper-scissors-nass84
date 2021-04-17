// ## Task 4: Computer Player

// Write a function that generates a random computer move. Use that function to make a dynamic game where the 
//computer move is randomly chosen every time instead of being hard-coded.

// This will be deemed as complete when the player can input any move in the prompt, the computer move is chosen by random, 
// and the correct result shows in the alert.


const choice = ["rock", "paper", "scissors"];

const random = Math.floor(Math.random() * choice.length);
computerChoice = (random, choice[random]);

let result = 0;

let playerMove = prompt("Do you pick rock, paper or scissors?");
let computerMove = computerChoice;

function getWinner () {
    if (playerMove === "paper" && computerMove === "rock") {
        result++;
    } else if (playerMove === "rock" && computerMove === "scissors") {
        result++;
    } else if (playerMove === "scissors" && computerMove === "paper" ) { 
        result++;
    } else if (playerMove === "paper" && computerMove === "scissors") {
        result--;
    } else if (playerMove === "rock" && computerMove === "paper") {
        result--;
    } else if (playerMove === "scissors" && computerMove === "rock" ){ 
        result--;
    }

    alert("You picked " + playerMove + ". The computer picked " + computerMove + ". The score is: " + result);

}
