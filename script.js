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

let playerScore = 0;
let computerScore = 0;
const result = document.querySelector(".result");

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            result.innerHTML = "It's a Tie! Both chose Rock.<br>";
        }
        else if (computerSelection === "Paper") {
            ++computerScore;
            result.innerHTML = "You Lose! Paper beats Rock.<br>";
        }
        else if (computerSelection === "Scissors") {
            ++playerScore;
            result.innerHTML = "You Win! Rock beats Scissors.<br>";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            ++playerScore;
            result.innerHTML = "You Win! Paper beats Rock.<br>";
        }
        else if (computerSelection === "Paper") {
            result.innerHTML = "It's a Tie! Both chose Paper.<br>";
        }
        else if (computerSelection === "Scissors") {
            ++computerScore;
            result.innerHTML = "You Lose! Scissors beats Paper.<br>";
        }
    }
    else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            ++computerScore;
            result.innerHTML = "You Lose! Rock beats Scissors.<br>";
        }
        else if (computerSelection === "Paper") {
            ++playerScore;
            result.innerHTML = "You Win! Scissors beats Rock.<br>";
        }
        else if (computerSelection === "Scissors") {
            result.innerHTML = "It's a Tie! Both chose Scissors.<br>";
        }
    }
    let score = `Score: Player ${playerScore}-${computerScore} Computer`;
    result.innerHTML += `Player: ${playerSelection} Computer: ${computerSelection}<br>${score}<br>`;
    if (playerScore === 5){
        result.innerHTML +="You won the game!";
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore === 5){
        result.innerHTML +="\n You lost the game!";
        playerScore = 0;
        computerScore = 0;
    }
  }
 

const rockBtn = document.querySelector(".Rock");
const paperBtn = document.querySelector(".Paper");
const scissorsBtn = document.querySelector(".Scissors");

rockBtn.addEventListener("click",(rockBtn) => playRound("Rock", getComputerChoice()));
paperBtn.addEventListener("click",(paperBtn) => playRound("Paper" ,getComputerChoice()));
scissorsBtn.addEventListener("click",(scissorsBtn) => playRound("Scissors", getComputerChoice()));