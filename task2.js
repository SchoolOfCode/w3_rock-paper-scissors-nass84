// ## Task 2: Function

// Take the if statements that you've written and tested and put them into a function. The variables from before should 
// now be taken in as parameters so that you can call the function with any two moves. 
// Instead of printing the result to the console, the function should return:

// - `1` if player1 wins
// - `0` if it is a draw
// - `-1` if player1 loses (player2 wins)

// This will be deemed as complete when the function can be called with any combination of valid moves and returns the appropriate number.


let result = 0;

function getWinner (playerMove, computerMove) {
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

    console.log(result);

}


// First Attempt - 

// Can use an if statement, unsure how to use the || properly)

// function getWinner(player1, player2){
//     console.log("Player picked " + player1 + "! " + "Computer picked "  + player2 + "!");
//     if (player1 === "paper" && player2 === "rock") { 
//         return "1";
//     }
// }




