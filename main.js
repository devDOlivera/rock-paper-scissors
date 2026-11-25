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

function getHumanChoice() {
  return window.prompt("Enter the choice (rock, paper or scissors)").toLowerCase();
}
