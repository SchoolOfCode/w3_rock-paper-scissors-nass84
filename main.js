console.log("Hello Becki");

// ## Task 1: Logic

// To complete this ticket you will need to write a set of if statements in [main.js](main.js) 
//that will determine the winner of rock, paper, scissors.

let playerMove = prompt("Do you pick rock, paper or scissors?");
let computerMove = "scissors";

// Plan out the possible combinations of rock, paper and scissors for the two moves. 

// Player Wins
// - If computer picked Rock and Player Paper - Player Wins 
// - If computer picked Scissors and Player Rock - Player Wins 
// - If computer picked Paper and Player Scissors - Player Wins

//     Draw
// - If computer picked Scissors and Player Scissors - Draw 
// - If computer picked Rock and Player Rock - Draw
// - If computer picked Paper and Player Paper - Draw 

//     Computer Wins
// - If computer picked Rock and Player Scissors - Computer Wins     
// - If computer picked Scissors and Player Paper - Computer Wins 
// - If computer picked Paper and Player Rock - Computer Wins 


//Then convert that logic to code and console.log the result of the game.

if (playerMove === "rock") {
    console.log("Computer picked rock, It's a draw")
} else if (playerMove === "scissors") {
    console.log("Computer picked rock, Computer wins")
} else if (playerMove === "paper") { 
    console.log("Computer picked rock, Player wins") 
} else {console.log("incorrect answer")
}

if (playerMove === "paper") {
    console.log("Computer picked paper, Its a draw!")
} else if (playerMove === "rock") {
    console.log("Computer picked paper, Computer wins!")
} else if (playerMove === "scissors") { 
    console.log("Computer picked paper, Player wins!") 
} else {console.log("incorrect answer")
}

if (playerMove === "scissors") {
    console.log("Computer picked scissors, Its a draw!")
} else if (playerMove === "rock") {
    console.log("Computer picked scissors, Player wins!")
} else if (playerMove === "paper") { 
    console.log("Computer picked scissors, Computer wins!") 
} else {console.log("incorrect answer")
}
// This will be deemed as complete when all permutations of the three possible moves 
//for each player have been handled correctly, e.g. rock vs rock is a draw, paper vs rock is a paper win, etc.