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

function resetGame() {
    playagain = document.querySelector('.header img');
    playagain.src = "";
    playerScore = 0;
    computerScore = 0;
    score.textContent = "PLAYER : "+playerScore+"    COMPUTER : "+computerScore;
    result.textContent = "The game has been reset."
}

function playAgainButton() {
    playagain = document.querySelector('.header img');
    playagain.src = "/images/playagain.png";
}

function updateScore(roundResult) {
    if (roundResult == "player") {
        playerScore++;
        if (playerScore == 5) {
            score.textContent = "PLAYER : "+playerScore+"    COMPUTER : "+computerScore;
            result.textContent = "GAME OVER. Player has won."
            playAgainButton();
        }
        else {
            score.textContent = "PLAYER : "+playerScore+"    COMPUTER : "+computerScore;
            result.textContent = "Player wins the round"
        }
    }
    else if (roundResult == "computer") {
        computerScore++;
        if (computerScore == 5) {
            score.textContent = "PLAYER : "+playerScore+"    COMPUTER : "+computerScore;
            result.textContent = "GAME OVER. Computer has won."
            playAgainButton();
        }
        else {
            score.textContent = "PLAYER : "+playerScore+"    COMPUTER : "+computerScore;
            result.textContent = "Computer wins the round"
        } 
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

    if (playerScore == 5 || computerScore === 5) {
        alert("click PLAY AGAIN to start a new game.")
    }
    else if (playerSelection == computerSelection) {result.textContent = "It was a tie"}
    else if (playerSelection == "rock" && computerSelection == "paper") {updateScore('computer')}
    else if (playerSelection == "rock" && computerSelection == "scissors") {updateScore('player')}
    else if (playerSelection == "paper" && computerSelection == "rock") {updateScore('player')}
    else if (playerSelection == "paper" && computerSelection == "scissors") {updateScore('computer')}
    else if (playerSelection == "scissors" && computerSelection == "rock") {updateScore('computer')}
    else if (playerSelection == "scissors" && computerSelection == "paper") {updateScore('player')}
    else {alert("unknown error")}
}