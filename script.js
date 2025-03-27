const colorDisplay = document.getElementById('color-display');
const userInput = document.getElementById('user-input');
const timeLeftDisplay = document.getElementById('time-left');
const scoreDisplay = document.getElementById('score-value'); // Selecția corectă a scorului
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
let gameStarted = false; // Verifică dacă jocul a început

// Selectează o singură culoare la început
function startGame() {
    selectedColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.style.backgroundColor = selectedColor; // Fundalul devine culoarea aleasă
    colorDisplay.textContent = ""; // Elimină textul anterior
    startTimer();
}

// Timer care începe doar după ce se alege culoarea
function startTimer() {
    if (gameStarted) return; // Evită restartarea timpului
    gameStarted = true;
    
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert(`Game over! Your final score: ${score}`);
        } else {
            timeLeft--;
            timeLeftDisplay.textContent = timeLeft;
        }
    }, 1000);
}

// Validează răspunsul utilizatorului
function validateAnswer() {
    const answer = userInput.value.trim().toLowerCase();
    if (validAnswers[selectedColor] && validAnswers[selectedColor].includes(answer)) {
        score++; // Crește scorul pentru răspuns corect
        scoreDisplay.textContent = score; // Actualizează scorul în UI
        userInput.value = ''; // Golește input-ul
    } else {
        alert('Wrong answer! Try again.');
    }
}

// Permite apăsarea "Enter" pentru a trimite răspunsul
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();  // Evită comportamentul implicit
        validateAnswer();
    }
});

// Butonul de Submit pentru răspuns
submitBtn.addEventListener('click', () => {
    validateAnswer();
});

// Pornește jocul la încărcarea paginii
startGame();
