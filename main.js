// DOM Variables

let result = 0;
let answer = true;
let gamesPlayed = 1;
let playerWins = 1;
let playerLosses = 1;
let draw = 1;
let playerMove;
let computerMove;
let displayComputerChoice = document.getElementById("computer-pick");
let playerChoiceText = document.getElementById("playerChoiceText");
let rockImage = document.querySelector("#rock");
let paperImage = document.querySelector("#paper");
let scissorsImage = document.querySelector("#scissors");
let you = document.querySelectorAll(`.you`);
let textButton = document.querySelector(`#text-button`);
let inputtedWord = document.getElementById("changeText");
let playAgain = document.querySelector("#play-again");

// Player Clicks on Image which is stored in event
// When player clicks on choice, Computer Picks their Random Choice

function computerPicks() {
  let choice = ["Wrestler", "Sumo", "Samurai"];

  let random = Math.floor(Math.random() * choice.length);

  computerChoice = (random, choice[random]);

  let computerMove = computerChoice;

  return computerMove;
}

// Compare Player Choice to Computer

// Rock

function playerRock(event) {
  const audioSumo = new Audio("growl.wav");
  audioSumo.play();
  playerChoiceText.classList.add("largerText");
  playerChoiceText.innerText = "You picked Rocky the Wrestler!";
  console.log("player picks rock");
  console.log("computer picks " + computerMove);
  playerMove = "Wrestler";
  computerMove = computerPicks();
  if (computerMove === "Wrestler") {
    console.log("draw");
    drawIncrease();
  } else if (computerMove === "Samurai") {
    console.log("player wins");
    playerScoreIncrease();
  } else if (computerMove === "Sumo") {
    console.log("computer wins");
    lossIncrease();
  }
  gamesScoreIncrease();
}

rockImage.addEventListener("click", playerRock);

//paper

function playerPaper(event) {
  const audioSumo = new Audio("sumo.wav");
  audioSumo.play();
  playerChoiceText.innerText = "You picked Sumo!";
  console.log("player picks paper");
  console.log("computer picks " + computerMove);

  playerMove = "Sumo";
  computerMove = computerPicks();
  if (computerMove === "Sumo") {
    console.log("draw");
    drawIncrease();
  } else if (computerMove === "Wrestler") {
    console.log("player wins");
    playerScoreIncrease();
  } else if (computerMove === "Samurai") {
    console.log("computer wins");
    lossIncrease();
  }

  gamesScoreIncrease();
}

paperImage.addEventListener("click", playerPaper);

//scissors

function playerScissors(event) {
  const audioSamurai = new Audio("sword.mp3");
  audioSamurai.play();
  playerChoiceText.innerText = "You picked Samurai!";
  console.log("player picks scissors");
  console.log("computer picks " + computerMove);
  playerMove = "Samurai";
  computerMove = computerPicks();
  if (computerMove === "Samurai") {
    console.log("draw");
    drawIncrease();
  } else if (computerMove === "Sumo") {
    console.log("player wins");
    playerScoreIncrease();
  } else if (computerMove === "Wrestler") {
    console.log("computer wins");
    lossIncrease();
  }

  gamesScoreIncrease();
}

scissorsImage.addEventListener("click", playerScissors);

// Scores

function gamesScoreIncrease() {
  let gamesScore = document.querySelector("#score-games");
  result = gamesPlayed++;
  gamesScore.innerText = result;
}

function playerScoreIncrease() {
  let playerScore = document.querySelector("#score-won");
  result = playerWins++;
  playerScore.innerText = result;
  setTimeout(() => {
    const audioWin = new Audio("win.mp3");
    audioWin.play();
  }, 500);
  displayComputerChoice.innerText =
    "The Master picked " + computerMove + "!" + "\nVICTORY IS YOURS!!!!!";
}

function drawIncrease() {
  let drawScore = document.querySelector("#score-draw");
  result = draw++;
  drawScore.innerText = result;
  displayComputerChoice.innerText =
    "The Master picked " + computerMove + "!" + "\nDRAW!!!!!";
}

function lossIncrease() {
  let lostScore = document.querySelector("#score-lost");
  result = playerLosses++;
  lostScore.innerText = result;
  setTimeout(() => {
    const audioLost = new Audio("fail.mp3");
    audioLost.play();
  }, 500);
  displayComputerChoice.innerText =
    "The Master picked " + computerMove + "!" + "\nYOU HAVE BEEN DEFEATED!";
}

// Make input replace player text

function changeHeading() {
  for (let i = 0; i < you.length; i++) {
    you[i].innerText = document.getElementById("changeText").value;
  }
  const audioRumble = new Audio("shortRumble.mp3");
  audioRumble.play();
  let wrestlerAnimate = document.getElementById("rock");
  wrestlerAnimate.classList.add("flip-vertical-right");
  let sumoAnimate = document.getElementById("paper");
  sumoAnimate.classList.add("scale-in-center");
  let samuraiAnimate = document.getElementById("scissors");
  samuraiAnimate.classList.add("roll-in-blurred-right");
  setTimeout(300);
  let flashingHeadline = document.getElementById("mainTitle");
  flashingHeadline.classList.add("pulsate-fwd");
  let flashingButton = document.getElementById("play-again");
  flashingButton.classList.add("pulsate-slow");
}

textButton.addEventListener("click", changeHeading);

// Username should be capitalised

function capitalise(word) {
  let lowerCaseWord = word.toLowerCase();
  let upperCaseLetter = lowerCaseWord[0];
  lowerCaseWord = lowerCaseWord.substring(1);
  upperCaseLetter = upperCaseLetter.toUpperCase();
  let capitaliseWord = upperCaseLetter + lowerCaseWord;

  return capitaliseWord;
}

inputtedWord.addEventListener(
  "blur",
  (e) => (e.target.value = capitalise(e.target.value))
);
