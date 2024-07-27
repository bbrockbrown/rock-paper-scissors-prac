choices = ["rock", "paper", "scissors"]
let humanScore = 0
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
        console.log("Computer wins!");
    } else if (humanChoice == "scissors" && compChoice == "paper") { 
        humanScore++;
        console.log("Player wins!")
    }
}

function playGame() {}