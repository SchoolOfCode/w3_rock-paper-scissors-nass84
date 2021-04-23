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
7. Option to play again

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
- Day 8 Completed up to Task 6 - Score is announced after each round and option to quit playing
- Day 9 Added Functions to make the code shorter. Started on Basic Html and CSS 
- Day 11 All scores now update on the page and the page refreshes on play again button. 
- Day 12 Added events to change the text on page, Added Capatilse function
- Day 13 Added new wrestling theme, animations and sounds
