

// Get required elements
const taskCountElement = document.getElementById("Task");
const clearHistoryBtn = document.getElementById("clear-history");
const activityLog = document.querySelector(".col-span-3");

// Initialize task count from displayed value
let taskCount = parseInt(taskCountElement.textContent);

// Function to handle task completion
function completeTask(event) {
    const button = event.target;

    // Ensure the task count does not go below zero and button is not already disabled
    if (taskCount > 0 && !button.disabled) {
        taskCount--;
        taskCountElement.textContent = taskCount; // Update displayed task count

        // Disable the button (but keep text unchanged)
        button.disabled = true;
        button.classList.add("bg-gray-400", "cursor-not-allowed");

        // Log activity
        const logEntry = document.createElement("p");
        logEntry.textContent = `Task "${button.parentElement.parentElement.querySelector("h3").textContent}" completed.`;
        logEntry.classList.add("text-gray-600", "text-sm", "mt-2");
        activityLog.appendChild(logEntry);

        // Show alert for task completion
        alert("You have completed the task successfully!");
    }
}

// Attach event listeners to all "Completed" buttons
document.querySelectorAll(".btn.bg-blue-500").forEach((button) => {
    button.addEventListener("click", completeTask);
});

// Clear activity history (but keep button enabled)
clearHistoryBtn.addEventListener("click", () => {
    // Disable the "Clear History" button
    // clearHistoryBtn.disabled = true;
    // clearHistoryBtn.classList.add("bg-gray-400", "cursor-not-allowed");

    // Remove all log entries except the first one (the title)
    const logEntries = activityLog.querySelectorAll("p");
    logEntries.forEach((entry, index) => {
        if (index >= 0) { // Skip the first log entry (the title)
            entry.remove();
        }
    });

    // Show an alert message
    // alert("History cleared successfully!");
});

document.getElementById("theme-btn").addEventListener("click", function() {
    // Define an array of light colors
    const lightColors = [
      "#FFB3B3",  // Light Red
      "#B3FFB3",  // Light Green
      "#B3D9FF",  // Light Blue
      "#FFF0B3",  // Light Yellow
      "#D7A6F7",  // Light Purple
      "#A6F1D1"   // Light Teal
    ];
  
    // Generate a random index
    const randomColor = lightColors[Math.floor(Math.random() * lightColors.length)];
  
    // Apply the random background color to the body or specific element
    document.body.style.backgroundColor = randomColor;
  });
  
  





