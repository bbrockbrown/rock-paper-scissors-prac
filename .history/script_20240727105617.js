choices = ["rock", "paper", "scissors"]
humanScore = 0
compScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice = prompt("Please enter 'Rock', 'Paper', or 'Scissors'");
    return choice.toLowerCase()
}

function playRound(humanChoice, compChoice) { 
    console.log(`Player chose ${humanChoice}. Computer chose ${compChoice}.`);

    if (humanChoice == "scissors" && compChoice == "scissors") {
        console.log(`It's a draw!`);
    } else if (humanChoice == "scissors" && compChoice == "rock") {
        compScore++;
        console.log("Computer wins!");
    } else if (humanChoice == "scissors" && compChoice == "paper") { 
        humanScore++;
        console.log("Player wins!");
    } else if (humanChoice == "paper" && compChoice == "paper") {
        console.log("It's a draw!");
    } else if (humanChoice == "paper" && compChoice == "rock") { 
        humanScore++;
        console.log("Player wins!");
    } else if (humanChoice == "paper" && compChoice == "scissors") { 
        compScore++;
        console.log("Computer wins!");
    } else if (humanChoice == "rock" && compChoice == "rock") {
        console.log("It's a draw!");
    } else if (humanChoice == "rock" && compChoice == "paper") { 
        compScore++;
        console.log("Computer wins!");
    } else if (humanChoice == "rock" && compChoice == "scissors") { 
        humanScore++;
        console.log("Player wins!")
    }
}

function playGame() { 
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (compScore > humanScore) { 
        console.log(`Game over! Computer wins with a score of ${compScore}`);
    } else { 
        console.log(`Congrats! You won with a score of ${humanScore}`);
    }
}
 playGame();
