# Rock, Paper, Scissors!

![Rock Paper Scissors](https://miro.medium.com/max/1000/1*FEcr9_owB5KplrClDpRenA.png)

## Concept

To create a game of Rock Paper Scissors against a computer

### Algorithm -  Pseudocode

0. Instructions 
1. Computer randomly generates either Rock, Paper or Scissors and keeps answer secret
2. Computer asks player >"Do you choose Rock, Paper or Scissors" 
3. Player inputs their choice to the computer
4. Computer tells player >"You have picked ** PlayerChoice **  I picked ** ComputerChoice **
5. Computer compares Players choice to Computers Choice
6. If Player wins say >"You won" add 1 point to the players score
    - If Computer wins say >"I win" add 1 point to computers score
    - If Draw say >"Draw, play again" do not add point to score
7. Check Score if Player score AND Computer score is 1 or under repeat from Step 1
8. If Player Score === 2 say >"You have defeated me" 
    - End Game
9. if Computer Score === 2 say >"I am the winner"  
    - End Game

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
    
#### Journal 

- Day 1 Wrote Algorithm, tested it on Jon and made the game in Scratch to check it worked. 
- Day 2 to Day 6 - Completed Homework up to Check Point
- Day 7 Completed Task 1 - Game outcomes into If Statements to check logic

#### Decisions

* Should Score be best of 3 or higher
* Should it count down from 3 and reveal 



