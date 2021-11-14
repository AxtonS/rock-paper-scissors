//Play 5 round game of Rock, Paper, Scissors
//Player selects rock, paper, or scissors
//Computer randomly generates rock, paper, or scissors
//Compare Player selection to computer selection
//Declare winner of round and move onto next selection
//After 5th round compare player wins to computer wins and declare winner
//May begin a new game
let playerScore = 0;
let computerScore = 0;
for (i = 0; i < 1;) {
    let begin = prompt('Type "yes" if you would like to play Rock, Paper, Scissors!', '').toLowerCase();
    if (begin === 'yes') {
        alert(`Welcome to a nice, friendly, barebones version of Rock, Paper, Scissors ^_^ Please follow`+
              ` the prompts and enjoy the game, it will be played over 5 rounds, feel free to keep going.`+
              ` Current games won are ${playerScore} and ${computerScore} for the computer.`)
        playGame();
    } else {
        alert('Maybe next time ^_^');
    }
    function playGame() {
        let playerWins = 0;
        let computerWins = 0;
        for (let i = 0; i < 5;) {
            let playerSelection = prompt('Please enter: rock, paper, or scissors', '').toLowerCase();
            let computerSelection = Math.floor(Math.random() * 3);
            //computerSelection 0 = rock, 1 = paper, 2 = scissors
            if (playerSelection === 'rock') {
                if (computerSelection === 0) {
                    alert('Computer chose rock, at least you didn\'t lose!');
                    i++;
                } else if (computerSelection === 1) {
                    computerWins++;
                    alert('Computer chose paper, you got wrapped buddy :(');
                    i++;
                } else if (computerSelection === 2) {
                    playerWins++;
                    alert('Computer chose scissors and I\'m happy to report they got smashed.');
                    i++;
                }
            }
            else if (playerSelection === 'paper') {
                if (computerSelection === 0) {
                    playerWins++;
                    alert('Computer chose rock and got wrippity wrapped ezpz');
                    i++;
                } else if (computerSelection === 1) {
                    alert('Computer chose paper, at least you didn\t lose!');
                    i++;
                } else if (computerSelection === 2) {
                    computerWins++;
                    alert('Computer chose scissors and cut ye to bits');
                    i++;
                }
            }
            else if (playerSelection === 'scissors') {
                if (computerSelection === 0) {
                    computerWins++;
                    alert('Computer chose rock and smashed you');
                    i++;
                }
                else if (computerSelection === 1) {
                    playerWins++;
                    alert('Computer chose paper and got cut up');
                    i++;
                }
                else if (computerSelection === 2) {
                    alert('Computer chose scissors, noone wins, just lots of cuts');
                    i++;
                }
            }
            else {
                alert('Perhaps you\'ve misspelled your selection, please try again.');
            }
            alert(`score is Player: ${playerWins} Computer: ${computerWins}`)
        }
        if (playerWins === computerWins) {
            //This if statement is just to fix grammar of the alert if score is 1-1
            if (playerWins === 1) {
                alert(`You both got ${playerWins} point, nobody wins, oh well.`);
            }
            else {
                alert(`You both got ${playerWins} points, nobody wins, oh well.`);
            }
        }
        else if (playerWins > computerWins) {
            playerScore ++;
            alert(`You win!!! Score was ${playerWins}-${computerWins}`);
        }
        else if (playerWins < computerWins) {
            computerScore ++;
            alert(`Computer wins, muahahahaha, I wonder if the game is rigged? Just joking, score was ${computerWins}-${playerWins}`);
        }
        // Put this in just in case something goes awry
        else {
            alert('An unexpected error hath occured, let\s try this again');
        }
    }
}
