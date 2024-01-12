// Function to update the clock display in 12-hour format without AM/PM
function updateClock() {
    const now = new Date();
    let hours = now.getHours();

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    // Update the clock element's text content with the current time
    document.getElementById('clock').textContent = timeString;
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode'); // Toggles the 'light-mode' class on the body
}

// Function to handle spacebar key press
function handleKeyPress(event) {
    if (event.code === 'Space') {
        const themeToggle = document.getElementById('theme-toggle');
        const isFullScreen = document.fullscreenElement !== null;

        if (!isFullScreen) {
            document.documentElement.requestFullscreen(); // Enter fullscreen mode
            themeToggle.style.display = 'none'; // Hide the toggle button
        } else {
            document.exitFullscreen(); // Exit fullscreen mode
            themeToggle.style.display = 'block'; // Show the toggle button
        }
    }
}

// Event listener for window load
window.addEventListener('load', () => {
    // Add event listener for keydown events
    document.addEventListener('keydown', handleKeyPress);

    // Event listener for fullscreen change
    document.addEventListener('fullscreenchange', () => {
        const flashText = document.getElementById('flashText');
        
        if (document.fullscreenElement) {
            flashText.style.display = 'none'; // Hide the flashing text when entering fullscreen
        }
    });
});

// Add a click event listener to the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Update the clock every second using setInterval
setInterval(updateClock, 1000);

// Call the updateClock function initially to display the clock immediately when the page loads
updateClock();
