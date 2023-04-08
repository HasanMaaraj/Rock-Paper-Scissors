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


function playRound(playerSelection, computerSelection) {

    function capitalize(s) {
        s1 = s[0].toUpperCase();
        s2 = s.slice(1).toLowerCase();
        return s1+s2;
       }

    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);

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
   
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    while (round < 5) {
        let playerSelection = prompt(`Choose Rock, Paper or Scissors.\tRound${round+1}`);
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("You Win!")) {
            playerScore += 1;
        }
        else if (result.includes("You Lose!")) {
            computerScore += 1;
        }
        if (!result.includes("Invalid")){
            round +=1;
        } 
    }

    if (playerScore > computerScore) {
        console.log(`You win! Player ${playerScore}-${computerScore} Computer`);
    }
    else if (playerScore < computerScore) {
        console.log(`You lose! Player ${playerScore}-${computerScore} Computer`);
    }
    else if (playerScore === computerScore) {
        console.log(`It's a Tie! Player ${playerScore}-${computerScore} Computer`);
    }
}