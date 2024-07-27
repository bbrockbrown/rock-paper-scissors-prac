choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return choices[Math.random() * choices.length]
}

console.log(getComputerChoice())