function getComputerChoice() {
    let randomChoice = Math.random();
    if (randomChoice <= 1/3) {randomChoice = "ROCK";}
    else if (randomChoice <= 2/3) {randomChoice = "PAPER";}
    else {randomChoice = "SCISSORS";}
    return randomChoice;
}

function getHumanChoice() {
    let answer = prompt("Choose Rock, Paper, or Scissors?").toUpperCase();
    return answer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`Your choice was ${humanChoice.toLowerCase()} while the computer chose ${computerChoice.toLowerCase()}.`)
    if (humanChoice == "ROCK" && computerChoice == "SCISSORS" || humanChoice == "PAPER" && computerChoice == "ROCK" || humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        humanScore++;
    }
    else if (humanChoice == computerChoice) {
    }
    else {computerScore++;}
    console.log("Your score is " + humanScore + "-" + computerScore + ".");
}

function playGame() {
    for (x=0; x<5; x++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log(`You won! Congratulations!`)
    }
    else if (humanScore == computerScore) {
        console.log(`You tied! Maybe the next one will be a win!`)
    }
    else {
        console.log(`You lost ): . Better luck next time!`)
    }
}

playGame()