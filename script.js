let humanScore = 0, computerScore = 0;
let humanChoice = '', computerChoice = '';
let roundWinner = '';

    function getComputerChoice() { // takes a random number from 1-3 and converts it 
        while (computerChoice === '') {
            computerChoice = Math.floor(Math.random() * 3)+1;

            if (computerChoice === 1) {
                computerChoice = 'rock';
            } else if (computerChoice === 2) {
                computerChoice = 'paper';
            } else if (computerChoice === 3) {
                computerChoice = 'scissors';
            } 
        }
    }
    
    function getHumanChoice() { //takes an answer from a prompt and converts it to lowercasd
        while (humanChoice === '') {
            humanChoice = window.prompt('Choose between ROCK, PAPER, or SCISSORS.' + '\n     YOU: ' + humanScore + '\n     COMPUTER: ' + computerScore);
            
            if (humanChoice.toLowerCase() === 'rock') {
                humanChoice = 'rock';
            } else if (humanChoice.toLowerCase() === 'paper') {
                humanChoice = 'paper';
            } else if (humanChoice.toLowerCase() === 'scissors') {
                humanChoice = 'scissors';
            } else {
                humanChoice = '';
                window.alert("Invalid input. Please try again.");
            }
        }
    }



    function playRound() { //decides the winner, adds score, and displays who won
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            ++humanScore;
            roundWinner = 'YOU: Rock vs COMP: Scissors\nYou win this round!'
            alert(roundWinner);
        } else if (humanChoice === 'rock' && computerChoice === 'paper'){
            ++computerScore;
            roundWinner = 'YOU: Rock vs COMP: Paper\nYou lost this round!'
            alert(roundWinner);
        } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            ++computerScore;
            roundWinner = 'YOU: Scissors vs COMP: Rock\nYou lost this round!'
            alert(roundWinner);
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            ++humanScore;
            roundWinner = 'YOU: Scissors vs COMP: Paper\nYou win this round!'
            alert(roundWinner);
        } else if (humanChoice === 'paper' && computerChoice === 'rock'){
            ++humanScore;
            roundWinner = 'YOU: Paper vs COMP: Rock\nYou win this round!'
            alert(roundWinner);
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            ++computerScore;
            roundWinner = 'YOU: Paper vs COMP: Scissors\nYou lost this round!'
            alert(roundWinner);
        } else {
            alert('Both chose: ' + humanChoice.toUpperCase() + ". It's a TIE!");
        }
    }

    function playGame () { //game process, resets the both choices and round winners
            getHumanChoice();
            getComputerChoice();
            playRound();
            humanChoice = '';
            computerChoice = '';
            roundWinner = '';
    }

    while (humanScore < 5 && computerScore < 5) { //makes sure the game ends at max score of 5
        playGame();
    }

    if (computerScore > humanScore) {
        alert('You lost! The score is: ' + humanScore + ' - ' + computerScore);
    } else {
        alert('You win! The score is: ' + humanScore + ' - ' + computerScore);
    }

