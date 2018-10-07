document.addEventListener("DOMContentLoaded", () => {

  let playerPara = document.createElement('p');
  let compPara = document.createElement('p');
  let playersScorePara = document.createElement('p');
  let computerScorePara = document.createElement('p');
  const playerChoice = document.querySelector(".player_choice");
  const compChoice = document.querySelector(".comps_choice");
  const pScore = document.querySelector(".player_score");
  const cScore = document.querySelector(".comp_score");

  let playerScore = 0;
  let compScore = 0;
  let choice = ["rock", "paper", "scissors"];

  playersScorePara.textContent = playerScore;
  pScore.appendChild(playersScorePara);
  computerScorePara.textContent = compScore;
  cScore.appendChild(computerScorePara);

  function pageReload(e){
    location.reload(e);
  }

  function playWinSound(){
    let winSound = document.querySelector(".win_sound");
    winSound.play();
  }

  function playLoseSound(){
    let loseSound = document.querySelector(".lose_sound");
    loseSound.play();
  }

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

  function display(){
    playersScorePara.textContent = playerScore;
    pScore.appendChild(playersScorePara);
    computerScorePara.textContent = compScore;
    cScore.appendChild(computerScorePara);
  }

  function playRound(e){
    let choiceName = e.target.name;
    let computerSelection = computerPlay();
    let score = playerScore + compScore;

    if(score < 5){
      playerPara.textContent = e.target.name.toUpperCase();
      playerChoice.appendChild(playerPara);
      compPara.textContent = computerSelection.toUpperCase();
      compChoice.appendChild(compPara);
      switch (true) {
        case (choiceName === choice[0] && computerSelection === choice[2]
          || choiceName === choice[1] && computerSelection === choice[0]
          || choiceName === choice[2] && computerSelection === choice[1]) :
          playerScore++;
          display();
          return playerScore;
        case (choiceName === choice[2] && computerSelection === choice[0]
          || choiceName === choice[0] && computerSelection === choice[1]
          || choiceName === choice[1] && computerSelection === choice[2]) :
          compScore++;
          display();
          return compScore;
        case (choiceName === computerSelection) :
          return score;
        default:
          return;
      }
    }
    if(score === 5 && playerScore > compScore){
      playWinSound();
    } else if(score === 5 && compScore > playerScore){
      playLoseSound();
    }
  }

    const buttons = Array.from(document.querySelectorAll(".choice"));
    buttons.forEach(name => name.addEventListener('click', playRound));
    const restart = document.querySelector(".restart");
    restart.addEventListener('click', pageReload);
})
