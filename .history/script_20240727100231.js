choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    return choices.chatAt(Math.random() * choices.length)
}

console.log(getComputerChoice())