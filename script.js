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
