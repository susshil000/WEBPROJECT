const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const popup = document.getElementById("popupbox");
const title = document.getElementById("popuptitle");
const text = document.getElementById("popuptext");
let randomNumber;
let attempts = 0;
let playerName = "";
let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

document.getElementById("info").addEventListener("click", () => {
  title.innerText = "Instructions";
  text.innerText = "🕳Guess the correct number between 1 to 100 \n.you will get limited 15 attempts \n.Otherwise You are Joker🤡 \n.Best of Luck!\n.Escape for Restart Game";
  popup.style.display = "flex";
});

document.getElementById("scores").addEventListener("click", () => {
  title.innerText = "High Scores";
  showHighScores();
  popup.style.display = "flex";
});
function closepopup() {
  popup.style.display = "none";
}

startBtn.addEventListener("click", () => {
  const nameInput = document.getElementById("names").value.trim();
  if (nameInput === "") {
    alert("Please enter your name to start the game.");
    return;
  }else{
  playerName = nameInput;
  startScreen.style.display = "none";
  gameScreen.style.display = "block";
  startGame();
}
});
function saveHighScore(attempts) {
  highScores.push({ name: playerName, score: attempts });
  highScores.sort((a, b) => a.score - b.score);
  localStorage.setItem("highScores", JSON.stringify(highScores.slice(0, 5)));
}
function showHighScores() {
  if (highScores.length === 0) {
    text.innerText = "No high scores yet.";
    return;
  }
  let list = "";
  highScores.forEach((player, index) => {
    list += `${index + 1}. ${player.name} - ${player.score} attempts\n`;
  });
  text.innerText = list;
}
function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").innerText = "";
  document.getElementById("attempts").innerText = "Attempts: 0";
  console.log("Game started ", randomNumber);
}
function Clean() {
  document.getElementById("guessInput").value = 0;

  startGame();
}
function Correct() {
  const Input = document.getElementById("guessInput").value;
  if (Input === "0" || Input === "") {
    document.getElementById("message").innerText = "Please Input value";
    console.log("Please Input value");
    attempts = 0;
    return;
  } else if (Input !== 0 || Input !== "") {
    checkGuess();
  }
}
function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  attempts++;
  if (guess === 0) {
    Correct();
  } else if (attempts > 15) {
    document.getElementById("message").innerText =
      `You Loss The Game  ${playerName}!You are Joker🤡`;
    // document.getElementById("message").innerText=" Restart Game Press Escape"
    return;
  } else if (guess === randomNumber) {
    document.getElementById("message").innerText = `🎉 Correct! ${playerName}!`;
    saveHighScore(attempts);
  } else if (guess > randomNumber) {
    document.getElementById("message").innerText = "📉 Too High!";
  } else if (guess < randomNumber) {
    document.getElementById("message").innerText = "📈 Too Low!";
  }

  document.getElementById("attempts").innerText = "Attempts: " + attempts;
}

document.addEventListener("keydown", function (e) {
  const key = e.key;
  if (key === "Enter" || key === "=") {
    Correct();
  } else if (key === "Escape") {
    Clean();
  }
});
