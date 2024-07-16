let humanScore = 0, computerScore = 0;
let humanChoice = '', computerChoice = '';
let roundWinner = '';

const rock = document.getElementById("rock");
rock.onclick = () => handleHumanChoice('rock');
const paper = document.getElementById("paper");
paper.onclick = () => handleHumanChoice('paper');
const scissors = document.getElementById("scissors");
scissors.onclick = () => handleHumanChoice('scissors');

function handleHumanChoice(choice) {
    humanChoice = choice;
    playGame();
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    computerChoice = choices[Math.floor(Math.random() * 3)];
}

function updateChoiceImages() {
    const humanChoiceImg = document.getElementById("pyrPokemon");
    const computerChoiceImg = document.getElementById("oppPokemon");

    humanChoiceImg.src = `img/pyr${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.png`;
    computerChoiceImg.src = `img/opp${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}.png`;
}

function playRound() {
    const text = document.querySelector("h2");
    const score = document.querySelector("h3");

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        ++humanScore;
        roundWinner = 'YOU: Rock vs COMP: Scissors. You win this round!';
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        ++computerScore;
        roundWinner = 'YOU: Rock vs COMP: Paper. You lost this round!';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        ++computerScore;
        roundWinner = 'YOU: Scissors vs COMP: Rock. You lost this round!';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        ++humanScore;
        roundWinner = 'YOU: Scissors vs COMP: Paper. You win this round!';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        ++humanScore;
        roundWinner = 'YOU: Paper vs COMP: Rock. You win this round!';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        ++computerScore;
        roundWinner = 'YOU: Paper vs COMP: Scissors. You lost this round!';
    } else {
        roundWinner = 'Both chose: ' + humanChoice.toUpperCase() + ". It's a TIE!";
    }

    text.textContent = roundWinner;
    score.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
    updateChoiceImages();
}

function playGame() {
    getComputerChoice();
    playRound();
    humanChoice = '';
    computerChoice = '';
    roundWinner = '';
    checkGameOver();
}

function checkGameOver() {
    const text = document.querySelector("h2");
    if (humanScore >= 5 || computerScore >= 5) {
        if (computerScore > humanScore) {
            text.textContent = 'You lost! The score is: ' + humanScore + ' - ' + computerScore;
        } else {
            text.textContent = 'You win! The score is: ' + humanScore + ' - ' + computerScore;
        }
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("score").textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
}
