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

function playRound(event) {
  let humanChoice = event.target.textContent;
  humanChoice = humanChoice.toLowerCase();
  let computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    console.log("Draw!");
    divText.textContent = "Draw!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`Win!, ${humanChoice} beats ${computerChoice}`);
    divText.textContent = `Win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    console.log(`Lose! ${computerChoice} beats ${humanChoice}`);
    divText.textContent = `Lose! ${humanChoice} beats ${computerChoice}`;
    computerScore++;
  }

  divScore.textContent = `Player score: ${humanScore}\nComputer score: ${computerScore}`;
  console.log(`Player score: ${humanScore}\nComputer score: ${computerScore}`);
}
let container = document.querySelector("#container");
let rockButton = document.createElement("button");
let paperButton = document.createElement("button");
let scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
rockButton.addEventListener("click", playRound);
paperButton.textContent = "Paper";
paperButton.addEventListener("click", playRound);
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener("click", playRound);

let divText = document.createElement("div");
divText.textContent = "Choose your option!";
let divScore = document.createElement("div");
divScore.textContent = `Player score: ${humanScore}\nComputer score: ${computerScore}`;

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(divText);
container.appendChild(divScore);
