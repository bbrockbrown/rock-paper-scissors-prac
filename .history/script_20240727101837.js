choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice = window.prompt("Please enter 'Rock', 'Paper', or 'Scissors'");
    return choice
}

console.log(getHumanChoice())