### Potential Code I may use -11/04/2021

Example of if else statement that works 

if(100 > 50) {
 console.log(`if statements are confusing`) 
} else if {
console.log(`if statements are not confusing`)
} 

Example of while loop that works - Repeat until true

while(count < 5) {
    console.log(count);
    count = count + 1;
    break;
}
console.log("Wooohooo!")

Example of for loop that works - Repeat number of times and then display text 

for(let count = 0; count < 10; count++){
	console.log(count);
}



<!--count += 1;  (adds 1 short cut)  
    count ++; increment operator 
    Count = count + 1; -->


- []Check else statments from yesterday

### Potential Code I may use -11/04/2021

Scratch game made, First half of 2 hour video watched, M1mo up to Conditionals
Wrote down what i think may be potentially right instructions so I can correct them as I learn more.  

0. Instructions 

console.log("We will play a game of Rock, Paper, Scissors. Rock beats Scissors, Scissors beats Paper and Paper beats Rock. Make your selection when asked, if you beat me you will score 1 point. Best of 3!");

OR 

alert("We will play a game of Rock, Paper, Scissors. Rock beats Scissors, Scissors beats Paper and Paper beats Rock. Make your selection when asked, if you beat me you will score 1 point. Best of 3!");

1. Computer randomly generates either Rock, Paper or Scissors and keeps answer secret

let ComputerAnswer = (**undefined as yet**)

if (ComputerAnswer === Rock) {
let ComputerAnswer = computerRock; 
} else if (ComputerAnswer === Paper) 
let ComputerAnswer = computerPaper; 
} else (ComputerAnswer === Scissors) 
let ComputerAnswer = computerScissors
}


2. Computer asks player >"Do you choose Rock, Paper or Scissors" 

let _playerAnswer_ = prompt("Do you choose Rock, Paper or Scissors" )

3. Player inputs their choice to the computer

**box appears and player types in answer**
** computer stores answer in variable _playerAnswer_**

if (playerAnswer === Rock) {
let playerAnswer = playerRock; 
} else if (playerAnswer === Paper) 
let playerAnswer = playerPaper; 
} else (playerAnswer === Scissors) 
let playerAnswer = playerScissors
}

4. Computer tells player >"You have picked ** PlayerChoice **  I picked ** ComputerChoice **

console.log("You have picked " + playerAnswer + " I picked " + computerAnswer);

5. Computer compares Players choice to Computers Choice

    var playerPoint = 0;
    var computerPoint = 0;

    var playerWin = (playerPoint +1)
    var computerWin = (computerPoint +1)

    if (computerRock === playerPaper) {
     (playerWin); 
    } else if (computerScissors === playerRock){ 
      (playerWin); 
    } else if (computerPaper === playerScissors){ 
      (playerWin); 
    } else if (computerScissors === playerScissors){
      ()
    } else if (computerRock === playerRock){ 
      () 
    } else if (computerPaper === playerPaper){ 
      () 
    } else if (computerRock === playerScissors){
     (computerWin); 
    } else if (computerScissors === playerPaper){
     (computerWin); 
    else if (computerPaper === playerRock){
    (computerWin); 
    }

6. If Player wins say >"You won" add 1 point to the players score
    - If Computer wins say >"I win" add 1 point to computers score
    - If Draw say >"Draw, play again" do not add point to score

    if (playerWin) {
    console.log("I win");
    } else if (computerWin) {
    console.log("I win"); 
    } else console.log("Draw");
    }

7. Check Score if Player score AND Computer score is 1 or under repeat from Step 1
8. If Player Score === 2 say >"You have defeated me"
9. if Computer Score === 2 say >"I am the winner"  

    var playerEndGame = ((playerWin === 3) || (computerWin === 1 && playerWin >==2));
    var computerEndGame =(computerWin ===3) || (playerWin === 1 && computerWin >==2));
    
    if (playerEndGame = true);{
    console.log("You win the game!")
    } else if (computerEndGame = true);{
     console.log("You lose the game!")   
    }
    else **Loop**
    
   

### Decide Winner

    Combinations

        Player Wins
    - If computer picked Rock and Player Paper - Player Wins 
    - If computer picked Scissors and Player Rock - Player Wins 
    - If computer picked Paper and Player Scissors - Player Wins

        Draw
    - If computer picked Scissors and Player Scissors - Draw 
    - If computer picked Rock and Player Rock - Draw
    - If computer picked Paper and Player Paper - Draw 

        Computer Wins
    - If computer picked Rock and Player Scissors - Computer Wins     
    - If computer picked Scissors and Player Paper - Computer Wins 
    - If computer picked Paper and Player Rock - Computer Wins 