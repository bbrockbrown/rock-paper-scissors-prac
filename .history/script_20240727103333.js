choices = ["rock", "paper", "scissors"]
let playerScore = 0
let compScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice = prompt("Please enter 'Rock', 'Paper', or 'Scissors'");
    return choice
}

function playRound(humanChoice, compChoice) { 
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice == "scissors" && compChoice == "scissors") {
        console.log("It's a draw!");
    } else if (humanChoice == "scissors" && compChoice == "rock") {
        compScore++;
        console.log("It's a draw!");
    }
}

function playGame() {}