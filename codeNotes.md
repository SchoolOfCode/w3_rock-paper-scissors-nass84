*Improvements to be made*

Task 6
 - Look into functions within Functions
 - [x] Create function for You win
 - [x] Create function for You loose
 - [x] Create function for draw

 Task 7 

 -[] Look into a way to make the numbers start again at 0

 Task 8 
 -[] Make username only start with letters,  not numbers or symbols.

// Make username only start with letters

// 1. Function that checks if the first letter is a letter
// 2. Take in a word
// 3. Check first letter is not a number
// 4. If letter is not a letter alert
// 5. Continue

function firstLetter(inputtxt) {
 let firstLetter = inputtxt[0];
 console.log(firstLetter);
 let letters = /^[a-zA-Z]([._-]?[a-zA-Z0-9]+)*$/;
 letters === firstLetter.substring(1);
 if (letters === true) {
  return true;
 } else {
  alert("Please input alphabet characters only");
  return false;
 }
}

inputtedWord.addEventListener(
 "blur",
 (e) => (e.target.value = firstLetter(e.target.value))
);
 

  // sets score to 0 but then goes back to original score
  // added refresh page to html instead 

// function playAgainButton(event) {

//   let lostScore = document.querySelector("#score-lost")
//     lostScore.innerText = 0;
//     // lostScore = playerLosses++;

//   let drawScore = document.querySelector("#score-draw")
//     drawScore.innerText = 0;
//     // drawScore = draw++;

//   let playerScore = document.querySelector("#score-won")
//     playerScore.innerText = 0; 
//     // playerScore = playerWins++;
//   }

// playAgain.addEventListener("click", playAgainButton);


