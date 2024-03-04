const score = JSON.parse(localStorage.getItem("score"));

updatescore();

function playgame(playermove) {
  let result = "";
  if (playermove == "Scissor") {
    if (computerMov === "Rock") {
      result = "you lose";
    } else if (computerMov === "paper") {
      result = "you won";
    } else if (computerMov === "Scissor") {
      result = "Tie";
    }
  } else if (playermove === "paper") {
    if (computerMov === "Rock") {
      result = "you won";
    } else if (computerMov === "paper") {
      result = "Tie";
    } else if (computerMov === "Scissor") {
      result = "you lose";
    }
  } else if (playermove === "Rock") {
    if (computerMov === "Rock") {
      result = "Tie";
    } else if (computerMov === "paper") {
      result = "you lose";
    } else if (computerMov === "Scissor") {
      result = "you won";
    }
  }
  if (result === "you won") {
    score.wins++;
  } else if (result === "you lose") {
    score.losses++;
  } else if (result === "Tie") {
    score.ties++;
  }
  localStorage.setItem("score", JSON.stringify(score));

  updatescore();

  document.querySelector(".Result").innerHTML = result;
  document.querySelector(".move").innerHTML = `you
      <img src="${playermove}.png" class="move-icon" />
      <img src="${computerMov}.png" class="move-icon" />
      Computer`;
}
function updatescore() {
  document.querySelector(
    ".score"
  ).innerHTML = `wins:${score.wins},losses:${score.losses},ties:${score.ties}`;
}

let computerMov = "";
function pickcomputermove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMov = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMov = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMov = "Scissor";
  }
}
