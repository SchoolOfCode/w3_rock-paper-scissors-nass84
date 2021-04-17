// ## Task 3: User Input

// Using `prompt`, get a user-inputted value for the player move. Then call your function with that value as the player move
// and the hard-coded computer move. Display the result using `alert`.

// This will be deemed as complete when you can input any move for the player move and hard-code any move 
//for the computer move and see the correct result (1, 0, or -1) in the alert.

let result = 0;

let playerMove = prompt("Do you pick rock, paper or scissors?");
let computerMove = "rock";

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

    alert(result);

}
