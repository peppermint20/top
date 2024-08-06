function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return 0;
  }
}

function getHumanChoice() {
  let choice = prompt("Enter in your choice");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("Draw!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`Win!, ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`Lose!, ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  console.log(`Player score: ${humanScore}\nComputer score: ${computerScore}`);
}

function playGame() {
  for (let i = 0; i < 5; ++i) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}

playGame();
