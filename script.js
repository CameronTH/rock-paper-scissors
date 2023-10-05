const buttonsContainer = document.querySelector(".buttons");
const choices = document.querySelectorAll(".choices");
const rounds = document.querySelector(".rounds");
const results = document.querySelector(".results");

choices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    playRound(e);
  })
);

let number = 0;
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

let getComputerChoice = function () {
  number = Math.floor(Math.random() * 3);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

let calculateResults = function (cscore, pscore) {
  console.log("5 Rounds Complete");
  console.log(playerScore, computerScore);
  if (cscore > pscore) {
    results.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore} | Computer wins!`;
    console.log("Computer wins!");
  } else if (pscore > cscore) {
    results.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore} | Player wins!`;
    console.log("Player wins!");
  } else {
    results.textContent = `Player Score: ${playerScore} | Computer Score: ${computerScore} | Draw!`;
    console.log("Draw!");
  }
};

let playRound = function (e) {
  //for (i = 0; i < 5; i++) {
  roundCounter += 1;
  rounds.textContent = `Round: ${roundCounter}`;
  console.log(roundCounter);

  let playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  console.log(
    `Computer selected: (${computerSelection}) Player selected: (${playerSelection})`
  );
  if (computerSelection === playerSelection) {
    results.textContent = "Round draw!";
  } else if (
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    results.textContent = `Round won! ${playerSelection} beats ${computerSelection}`;
    playerScore += 1;
  } else {
    results.textContent = `Round lost! ${computerSelection} beats ${playerSelection} `;
    computerScore += 1;
  }
  if (roundCounter >= 5) {
    console.log("more than 5");
    buttonsContainer.style.display = "none";
    setTimeout(() => {
      calculateResults(computerScore, playerScore);
      roundCounter = 0;
      playerScore = 0;
      computerScore = 0;
      buttonsContainer.style.display = "flex";
    }, 2000);
  }

  // }
};
