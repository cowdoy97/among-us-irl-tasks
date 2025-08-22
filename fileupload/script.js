const accessCodes = {
    "102010": "Luke",
    "102020": "Chol",
    "102030": "Faith",
    "102040": "Nevaeh",
    "102050": "Daniel",
    "102060": "Jedi",
    "102070": "Tremigh",
    "102080": "Syvaya",
    "102090": "Juan",
    "102091": "Stephanie",
    "102092": "Lily Rose",
    "102093": "JonBoy",
    "102094": "Shay",
    "102095": "Tesha"
};

function login() {
    const accessCode = document.getElementById('access-code').value;
    const errorMessage = document.getElementById('error-message');
    if (accessCodes[accessCode]) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('app-wrapper').style.display = 'flex'; // Use flex to show the app
        document.getElementById('welcome-message').innerText = `Hello, ${accessCodes[accessCode]}`;
        errorMessage.innerText = '';
    } else {
        errorMessage.innerText = 'Invalid Access Code';
    }
}

// Get references to all the elements we need to manipulate
const dropZone = document.getElementById('drop-zone');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const progressText = document.getElementById('progress-text');
const taskComplete = document.getElementById('task-complete');
const countdownMessage = document.getElementById('countdown-message');
const fakeFile = document.getElementById('fake-file');

// This is necessary to allow a drop event to occur
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

// This is the main event: when the fake file is dropped on the zone
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();

    // Hide the fake file and drop zone to clean up the UI
    fakeFile.style.display = 'none';
    dropZone.style.display = 'none';

    // Show the progress bar and start the upload simulation
    progressContainer.style.display = 'block';
    let width = 0;
    const progressInterval = setInterval(() => {
        if (width >= 100) {
            clearInterval(progressInterval); // Stop the progress bar
            taskComplete.style.display = 'block';
            startRefreshCountdown(); // Start the final countdown
        } else {
            width++;
            progressBar.style.width = width + '%';
            progressText.innerText = width + '%';
        }
    }, 300); // 300ms * 100 = 30 seconds total for upload
});

function startRefreshCountdown() {
    let countdownTime = 30;
    countdownMessage.style.display = 'block'; // Show the countdown message area

    const countdownInterval = setInterval(() => {
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            location.reload(); // Refresh the page
        } else {
            countdownMessage.innerText = `Refreshing for next user in ${countdownTime} seconds...`;
            countdownTime--;
        }
    }, 1000); // Update every 1 second
}