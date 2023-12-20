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
