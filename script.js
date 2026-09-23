
const demonNames = ["Imp", "Pinky", "Cacodemon", "Baron of Hell"];
let score = 0;

// 2. DOM selection
const message = document.getElementById("demo-message");
const scoreEl = document.getElementById("score");
const demonList = document.getElementById("demon-list");
const themeToggleButton = document.getElementById("theme-toggle");
const scoreButton = document.getElementById("score-button");

// 3. Functions
function updateScore() {
  scoreEl.textContent = String(score);
}

function showDemonList() {
  demonList.innerHTML = "";

  demonNames.forEach((demon) => {
    const listItem = document.createElement("li");
    listItem.textContent = demon;
    demonList.appendChild(listItem);
  });
}

// 4. Event listeners
themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("arena-night");
  const isNight = document.body.classList.contains("arena-night");

  message.textContent = isNight
    ? "Arena mode: night shift activated."
    : "Arena mode: daylight restored.";
});

scoreButton.addEventListener("click", () => {
  score += 1;
  const demon = demonNames[score % demonNames.length];
  message.textContent = `You defeated ${demon}!`;
  updateScore();
});


showDemonList();
updateScore();
