
let choice = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;

function computerPlay(){
  let randomNum = Math.floor(Math.random() * 3);
  if(randomNum === 0){
    return choice[0];
  } else if (randomNum === 1){
    return choice[1];
  } else {
    return choice[2];
  }
}

function playRound(playerSelection, computerSelection){
  switch (true){
      case (playerSelection.toUpperCase() === choice[0].toUpperCase() &&
        computerSelection === choice[2] || playerSelection.toUpperCase() === choice[1].toUpperCase() &&
        computerSelection === choice[0] || playerSelection.toUpperCase() === choice[2].toUpperCase() &&
        computerSelection === choice[1]) :
        return playerScore++;
        break;
      case (playerSelection.toUpperCase() === choice[2].toUpperCase() &&
        computerSelection === choice[0] || playerSelection.toUpperCase() === choice[0].toUpperCase() &&
        computerSelection === choice[1] || playerSelection.toUpperCase() === choice[1].toUpperCase() &&
        computerSelection === choice[2]) :
        return compScore++;
        break;
      case (playerSelection.toUpperCase() === computerSelection.toUpperCase()) :
        return computerSelection;
        break;
      default:
        return computerSelection;
  }
}


let selection = document.querySelector("button");
