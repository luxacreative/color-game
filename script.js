const colorDisplay = document.getElementById('color-display');
const userInput = document.getElementById('user-input');
const timeLeftDisplay = document.getElementById('time-left');
const scoreDisplay = document.getElementById('score');
const submitBtn = document.getElementById('submit-btn');

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink'];
const validAnswers = {
    red: ['apple', 'cherry', 'rose', 'firetruck'],
    green: ['grass', 'tree', 'lime', 'frog'],
    blue: ['sky', 'ocean', 'blueberry', 'bluejay'],
    yellow: ['banana', 'lemon', 'sunflower', 'gold'],
    orange: ['pumpkin', 'carrot', 'orange', 'tangerine'],
    purple: ['grape', 'lavender', 'violet', 'eggplant'],
    pink: ['rose', 'flamingo', 'cotton candy', 'peony']
};

let selectedColor;
let timeLeft = 30;
let timerInterval;
let score = 0;

// Select a color at the beginning and change the background
function startGame() {
    selectedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.style.backgroundColor = selectedColor; // Set the background to the selected color
    startTimer();
}

// Start the countdown timer only after the color is selected
function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Game over! Your score: ' + score);
        } else {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;
        }
    }, 1000);
}

// Validate the user's input
function validateAnswer() {
    const answer = userInput.value.trim().toLowerCase();
    if (validAnswers[selectedColor] && validAnswers[selectedColor].includes(answer)) {
        score++; // Increase score if the answer is correct
        scoreDisplay.textContent = `Score: ${score}`;
        userInput.value = ''; // Clear the input after a correct answer
    } else {
        alert('Wrong answer! Try again.');
    }
}

// Allow Enter to submit answer without clearing the input
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevent form submission or page reload
        validateAnswer(); // Validate the answer
    }
});

// Add event listener for submit button
submitBtn.addEventListener('click', () => {
    validateAnswer();
});

// Start the game when the page loads
startGame();
