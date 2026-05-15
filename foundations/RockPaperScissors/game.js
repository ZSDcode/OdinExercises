let humanScore = 0;
let computerScore = 0;
const computerChoices = ["rock", "paper", "scissors"];

function play(option) {
    let msg;
    let botChoose = computerChoices[Math.floor(Math.random() * 3)];
    if (checkWin(option, botChoose) == "win") {
        humanScore++;
        msg = "Human Wins";
    } else if (checkWin(option, botChoose) == "lose") {
        computerScore++;
        msg = "Computer Wins";
    } else {
        msg = "It's a Draw";
    }
    document.querySelector(".result").textContent = `${msg}`;
    document.querySelector(".hScore").textContent = `Human Score: ${humanScore}`;
    document.querySelector(".cScore").textContent = `Computer Score: ${computerScore}`;
}

function checkWin(playerOpt, compOpt) {
    if (playerOpt == compOpt) {
        return "draw";
    } else if ((playerOpt == "rock" && compOpt == "scissors") ||
               (playerOpt == "scissors" && compOpt == "paper") ||
               (playerOpt == "paper" && compOpt == "rock")) {
        return "win";
    }
    return "lose";
}

function reset() {
    humanScore = 0;
    computerScore = 0;
    document.querySelector(".hScore").textContent = `Human Score: ${humanScore}`;
    document.querySelector(".cScore").textContent = `Computer Score: ${computerScore}`;
    document.querySelector(".result").textContent = "";
}
