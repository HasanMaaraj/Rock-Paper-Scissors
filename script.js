function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else if (choice === 2) {
        return "Scissors";
    }
}


function playRound() {


    playerSelection = this.class;
    computerSelection = getComputerChoice();

    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return "It's a Tie! Both chose Rock";
        }
        else if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        }
        else {
            return "Invalid computerSelection input";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection === "Paper") {
            return "It's a Tie! Both chose Paper";
        }
        else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper";
        }
        else {
            return "Invalid computerSelection input";
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection === "Paper") {
            return "You Win! Scissors beats Rock";
        }
        else if (computerSelection === "Scissors") {
            return "It's a Tie! Both chose Scissors";
        }
        else {
            return "Invalid computerSelection input";
        }
    }
    else {
        return "Invalid playerSelection input";
    }
  }
 

const rockBtn = document.querySelector(".Rock");
const paperBtn = document.querySelector(".Paper");
const scissorsBtn = document.querySelector(".Scissors");

rockBtn.addEventListener("click",playRound);
paperBtn.addEventListener("click",playRound);
scissorsBtn.addEventListener("click",playRound);

const result = document.querySelector(".result")