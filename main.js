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
    return computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! Paper beats Rock.")
    return computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! Scissors beats Paper.")
    return computerScore++;
  } else if (computerChoice === humanChoice) {
    console.log("Draw!");
  } else {
    console.log("You win!")
    return humanScore++;
  }
}

// Run the full game (5 rounds)
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice );;
  }
  
  if (computerScore > humanScore) {
    console.log("Computer's win the game!");
    console.log("Computer Score: " + computerScore);
    console.log("Human Score: " + humanScore);
  } else {
    console.log("You win the game!");
    console.log("Computer Score: " + computerScore);
    console.log("Human Score: " + humanScore);
  }
}

playGame();