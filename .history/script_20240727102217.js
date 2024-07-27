choices = ["Rock", "Paper", "Scissors"]
let playerScore = 0
let compScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice = prompt("Please enter 'Rock', 'Paper', or 'Scissors'");
    return choice
}

console.log(getHumanChoice())