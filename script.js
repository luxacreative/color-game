const colorDisplay = document.getElementById('color-display');
const userInput = document.getElementById('user-input');
const timeLeftDisplay = document.getElementById('time-left');

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink'];
let selectedColor;
let timeLeft = 30;
let timerInterval;

// Select a color at the beginning and change the background
function startGame() {
    selectedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.style.backgroundColor = selectedColor; // Set the background to the selected color
    startTimer();
}

// Start the countdown timer
function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Game over!');
        } else {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;
        }
    }, 1000);
}

// Start the game when the page loads
startGame();
