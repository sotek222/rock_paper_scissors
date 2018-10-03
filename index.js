document.addEventListener("DOMContentLoaded", () => {
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



  function playRound(e){
    let choiceName = e.target.name;
    let computerSelection = computerPlay();
    let score = playerScore + compScore;

    playerPara.textContent = e.target.name.toUpperCase();
    playerChoice.appendChild(playerPara);
    compPara.textContent = computerPlay().toUpperCase();
    compChoice.appendChild(compPara);

    if(score < 5){
      switch (true){
        case (choiceName === choice[0] && computerSelection === choice[2]
          || choiceName === choice[1] && computerSelection === choice[0]
          || choiceName === choice[2] && computerSelection === choice[1]) :
          playerScore++;
          return playerScore;
          break;
        case (choiceName === choice[2] && computerSelection === choice[0]
          || choiceName === choice[0] && computerSelection === choice[1]
          || choiceName === choice[1] && computerSelection === choice[2]) :
          compScore++;
          return compScore;
          break;
        case (choiceName === computerSelection) :
          return score;
          break;
        default:
          return;
      }
    }
  }

  let playerPara = document.createElement('p');
  let compPara = document.createElement('p');
  const buttons = Array.from(document.querySelectorAll(".choice"));
  const playerChoice = document.querySelector(".player_choice");
  const compChoice = document.querySelector(".comps_choice");
  buttons.forEach(name => name.addEventListener('click', playRound));

})
