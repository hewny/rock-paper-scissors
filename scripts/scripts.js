// 1 = rock -> 3 wins
// 2 = paper
// 3 = scissors

function computerPlay() {
    number = Math.floor(Math.random()*3+1);
    if (number == 1) {return "rock"}
    else if (number == 2) {return "paper"}
    else {return "scissors"}
}

function playRound() {
    playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();
    computerSelection = computerPlay();

    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection == computerSelection) {return "tie"}
    else if (playerSelection == "rock" && computerSelection == "paper") {return "lose"}
    else if (playerSelection == "rock" && computerSelection == "scissors") {return "win"}
    else if (playerSelection == "paper" && computerSelection == "rock") {return "win"}
    else if (playerSelection == "paper" && computerSelection == "scissors") {return "lose"}
    else if (playerSelection == "scissors" && computerSelection == "rock") {return "lose"}
    else if (playerSelection == "scissors" && computerSelection == "paper") {return "win"}
    else {return "unknown error"}
}

function game() {
    let playerScore = 0
    let computerScore = 0

    while (playerScore != 5 && computerScore !=5){
        result = playRound()
        if (result == "win") {
            playerScore++
            console.log("Player win.")
        }
        else if (result == "lose") {
            computerScore++
            console.log("Player lose.")
        }
        else if (result == "tie") {
            console.log("It is a tie.")
        }
        
        console.log("The score is, player: "+playerScore+" computer: "+computerScore)
    }

    console.log("The game has ended.")
}