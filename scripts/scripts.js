// 1 = rock -> 3 wins
// 2 = paper
// 3 = scissors

let playerScore = 0
let computerScore = 0

const score = document.querySelector('h2');
const result = document.querySelector('h3');

function computerPlay() {
    number = Math.floor(Math.random()*3+1);
    if (number == 1) {return "rock"}
    else if (number == 2) {return "paper"}
    else {return "scissors"}
}

function updateScore(roundResult) {
    if (roundResult == "player") {
        playerScore++;
        score.textContent = "PLAYER : "+playerScore+"    COMPUTER : "+computerScore;
        result.textContent = "Player wins the round"
    }
    else if (roundResult == "computer") {
        computerScore++;
        score.textContent = "PLAYER : "+playerScore+"    COMPUTER : "+computerScore;
        result.textContent = "Computer wins the round"
    }
}
function clearSelection() {
    check = document.querySelector('.selected')
    if (check != null) {
        check.classList.remove('selected')
    }
}

function updateComputer(computerSelection) {
    if (computerSelection == 'rock') {
        document.querySelector('.buttons2 #one').classList.add('selected')
    }
    else if (computerSelection == 'paper') {
        document.querySelector('.buttons2 #two').classList.add('selected')
    }
    else if (computerSelection == 'scissors') {
        document.querySelector('.buttons2 #three').classList.add('selected')
    }    
}

function playRound(playerSelection) {
    clearSelection();
    clearSelection();
    document.querySelector(`#${playerSelection}`).classList.add('selected');
    computerSelection = computerPlay();
    updateComputer(computerSelection);

    if (playerSelection == computerSelection) {result.textContent = "It was a tie"}
    else if (playerSelection == "rock" && computerSelection == "paper") {updateScore('computer')}
    else if (playerSelection == "rock" && computerSelection == "scissors") {updateScore('player')}
    else if (playerSelection == "paper" && computerSelection == "rock") {updateScore('player')}
    else if (playerSelection == "paper" && computerSelection == "scissors") {updateScore('computer')}
    else if (playerSelection == "scissors" && computerSelection == "rock") {updateScore('computer')}
    else if (playerSelection == "scissors" && computerSelection == "paper") {updateScore('player')}
    else {alert("unknown error")}
}

function game() {
    
    score.textContent = "The score is, player: "+playerScore+" computer: "+computerScore;

    if (playerScore == 5) {
        score.textContent = "GAME OVER PLAYER WINS"
    }
    else if (computerScore == 5) {
        score.textContent = "GAME OVER COMPUTER WINS"
    }
}
