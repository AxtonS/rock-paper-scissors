
let playerScore = 0;
let computerScore = 0;
let score = document.querySelector('.score');
let message = document.querySelector('.message');
function playRound(player) {
    let playerSelection = player
    let computerSelection = Math.floor(Math.random() * 3);
    if (playerSelection === 'rock') {
        if (computerSelection === 0) {
            message.textContent = `Computer chose rock, tie!`
        } else if (computerSelection === 1) {
            computerScore++;
            message.textContent = `Computer chose paper, you lose!`;
        } else if (computerSelection === 2) {
            playerScore++;
            message.textContent = `Computer chose scissors, you win!`;
        }

    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 0) {
            playerScore++;
            message.textContent = `Computer chose rock, you win!`;
        } else if (computerSelection === 1) {
            message.textContent = `Computer chose paper, tie!`;
        } else if (computerSelection === 2) {
            computerScore++;
            message.textContent = `Computer chose scissors, you lose!`;
        }

    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 0) {
            computerScore++;
            message.textContent = `Computer chose rock, you lose!`;
        }
        else if (computerSelection === 1) {
            playerScore++;
            message.textContent = `Computer chose paper, you win!`;
        }
        else if (computerSelection === 2) {
            message.textContent = `Computer chose scissors, tie!`;
        }

    }
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    finalScore();
}

function testButton(player) {
    alert(player);
}
const rockButton = document.getElementById('rock');
rockButton.onclick = () => playRound('rock');

const paperButton = document.querySelector('#paper');
paperButton.onclick = () => playRound('paper');

const scissorsButton = document.querySelector('#scissors');
scissorsButton.onclick = () => playRound('scissors');
function finalScore() {
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore === computerScore) {
            if (playerScore === 1) {
                message.textContent = `You both got ${playerScore} point, nobody wins, oh well.`;
            }
            else {
                message.textContent = `You both got ${playerScore} points, nobody wins, oh well.`;
            }
        }
        else if (playerScore > computerScore) {
            message.textContent = `You win!!! Score was ${playerScore}-${computerScore}`;
        }
        else if (playerScore < computerScore) {
            message.textContent = `Computer wins, muahahahaha, I wonder if the game is rigged? Just joking, score was ${computerScore}-${playerScore}`;
        }
        // Put this in just in case something goes awry
        else {
            message.textContent = 'An unexpected error hath occured, let\s try this again';
        }
        score.textContent = `Make another selection to begin a new game`;
    }
}

