const gridContainer = document.getElementById('number-grid');
const message = document.getElementById('message');
const countdown = document.getElementById('countdown');
let numbers = Array.from({ length: 10 }, (_, i) => i + 1);
let gameActive = true;
let userSequence = []; // Array to store the user's clicks

// Shuffles the array of numbers randomly
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Creates and displays the number grid
function createGrid() {
    shuffle(numbers);
    for (const number of numbers) {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.textContent = number;

        item.addEventListener('click', () => {
            // Only process clicks if the game is active and the number hasn't been clicked yet
            if (!gameActive || item.classList.contains('selected')) {
                return;
            }

            const clickedNumber = parseInt(item.textContent);
            userSequence.push(clickedNumber);
            item.classList.add('selected'); // Make the number glow green

            // Only check the sequence after 10 numbers have been pressed
            if (userSequence.length === 10) {
                gameActive = false; // Disable further clicks
                validateSequence();
            }
        });
        gridContainer.appendChild(item);
    }
}

// New function to check the entire sequence at the end
function validateSequence() {
    let isCorrect = true;
    for (let i = 0; i < 10; i++) {
        if (userSequence[i] !== i + 1) {
            isCorrect = false;
            break; // Exit the loop as soon as a mistake is found
        }
    }

    if (isCorrect) {
        message.textContent = 'Success! Manifolds unlocked.';
        message.style.color = '#00ff00';
        startCountdown(10);
    } else {
        message.textContent = 'Incorrect Order!';
        message.style.color = '#ff4444';
        startCountdown(3);
    }
}

// Starts a countdown and then refreshes the page
function startCountdown(duration) {
    let timer = duration;
    countdown.textContent = `Refreshing in ${timer} seconds...`;
    const interval = setInterval(() => {
        timer--;
        countdown.textContent = `Refreshing in ${timer} seconds...`;
        if (timer <= 0) {
            clearInterval(interval);
            location.reload();
        }
    }, 1000);
}

// Initialize the grid when the script loads
createGrid();