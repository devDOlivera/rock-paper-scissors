// Scoring variables
let humanScore = 0;
let computerScore = 0;

// Get the computer option
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Get the human option
function getHumanChoice() {
  return window.prompt("Enter the choice (rock, paper or scissors)").toLowerCase();
}

// Run a single round of the game
function playRound(humanChoice, computerChoice) {
  if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! Rock beats Scissors.")
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper beats Rock.")
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors beats Paper.")
    computerScore++;
  } else {
    console.log("You win!")
    humanScore++;
  }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);