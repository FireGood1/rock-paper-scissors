
let humanScore = 0;
let computerScore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let resultsContainer = document.querySelector("#results-container");
let choice = document.createElement("p")
let scoreboard = document.createElement("h2")
let winner = document.createElement("h1")
resultsContainer.appendChild(choice)
resultsContainer.appendChild(scoreboard)
resultsContainer.appendChild(winner);


function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice <= 1/3) {randomChoice = "ROCK";}
    else if (randomChoice <= 2/3) {randomChoice = "PAPER";}
    else {randomChoice = "SCISSORS";}
    return randomChoice;
}
rock.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
        return playRound("ROCK", getComputerChoice());
    }
});
paper.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
        return playRound("PAPER", getComputerChoice());
    }
});
scissors.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
        playRound("SCISSORS", getComputerChoice());
    }
});

function playRound(humanChoice, computerChoice) {

    choice.textContent = `Your choice was ${humanChoice.toLowerCase()} while the computer chose ${computerChoice.toLowerCase()}.`
    if (humanChoice == "ROCK" && computerChoice == "SCISSORS" || humanChoice == "PAPER" && computerChoice == "ROCK" || humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        humanScore++;
    }
    else if (humanChoice == computerChoice) {}
    else {computerScore++;}

    scoreboard.textContent = `The score is ${humanScore}-${computerScore}.`
    if (humanScore == 5) {
            winner.textContent = "You won! Congratulations!";
        }
    else if (computerScore == 5) {
        winner.textContent = "You lost ):. Better luck next time!";
     }  
}
