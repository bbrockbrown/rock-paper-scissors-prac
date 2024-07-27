choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return choices[Math.random() * choices.length-1]
}

console.log(getComputerChoice())