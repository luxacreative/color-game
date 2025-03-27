const colors = ['Roșu', 'Verde', 'Albastru', 'Galben', 'Portocaliu'];
let currentColor;
let timer = 30;
let score = 0;
let interval;
let usedWords = [];

document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('submit').addEventListener('click', addAnswer);

function startGame() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  startColorCycle();
  startTimer();
}

function startColorCycle() {
  interval = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    currentColor = colors[randomIndex];
    document.getElementById('color-name').textContent = currentColor;
    document.body.style.backgroundColor = currentColor.toLowerCase();
  }, 1000);
}

function startTimer() {
  const timerElement = document.getElementById('timer');
  const timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      timerElement.textContent = `Timp rămas: ${timer} secunde`;
    } else {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function addAnswer() {
  const input = document.getElementById('input').value.trim();
  if (input && !usedWords.includes(input.toLowerCase())) {
    usedWords.push(input.toLowerCase());
    score++;
    document.getElementById('score').textContent = score;
  }
  document.getElementById('input').value = '';
}

function endGame() {
  clearInterval(interval);
  alert(`Jocul s-a încheiat! Scor final: ${score}`);
  resetGame();
}

function resetGame() {
  score = 0;
  timer = 30;
  usedWords = [];
  document.getElementById('score').textContent = score;
  document.getElementById('input').value = '';
  document.getElementById('menu').style.display = 'block';
  document.getElementById('game').style.display = 'none';
}
