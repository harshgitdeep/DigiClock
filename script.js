// Function to update the clock display
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    
    // Update the clock element's text content with the current time
    document.getElementById('clock').textContent = timeString;
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode'); // Toggles the 'light-mode' class on the body
}

// Add a click event listener to the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Update the clock every second using setInterval
setInterval(updateClock, 1000);

// Call the updateClock function initially to display the clock immediately when the page loads
updateClock();

let isFullScreen = false;

// Function to handle spacebar key press
function handleKeyPress(event) {
    if (event.code === 'Space') {
        if (!isFullScreen) {
            document.documentElement.requestFullscreen(); // Enter fullscreen mode
            document.getElementById('theme-toggle').style.display = 'none'; // Hide the toggle button
            isFullScreen = true;
        } else {
            document.exitFullscreen(); // Exit fullscreen mode
            document.getElementById('theme-toggle').style.display = 'block'; // Show the toggle button
            isFullScreen = false;
        }
    }
}

// Add event listener for keydown events
document.addEventListener('keydown', handleKeyPress);

// Add this JavaScript code to your existing script

// Function to hide the flashing text after a delay
function hideFlashText() {
    const flashText = document.getElementById('flashText');
    setTimeout(() => {
        flashText.style.display = 'none';
    }, 2000); // Hide after 2 seconds (adjust as needed)
}

// Event listener for window load
window.addEventListener('load', () => {
    const flashText = document.getElementById('flashText');
    flashText.style.display = 'block'; // Display the flashing text initially
    hideFlashText(); // Hide the flashing text after a delay

    // Add event listener for keydown events
    document.addEventListener('keydown', handleKeyPress);
});

