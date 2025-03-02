const taskCountElement = document.getElementById("Task");
const clearHistoryBtn = document.getElementById("clear-history");
const activityLog = document.querySelector(".col-span-3");
const incrementCountElement = document.getElementById("increment"); 

let taskCount = parseInt(taskCountElement.textContent);
let completedTasks = parseInt(incrementCountElement.textContent); 

function completeTask(event) {
    const button = event.target;

    if (taskCount > 0 && !button.disabled) {
        taskCount--;
        taskCountElement.textContent = String(taskCount).padStart(2, '0'); 

        
        completedTasks++;
        incrementCountElement.textContent = completedTasks;

        button.disabled = true;
        button.classList.add("bg-gray-400", "cursor-not-allowed");

        const now = new Date();
        const formattedTime = now.toLocaleTimeString(); 

        const logEntry = document.createElement("p");
        logEntry.textContent = `Task "${button.parentElement.parentElement.querySelector("h3").textContent}" completed at ${formattedTime}.`;
        logEntry.classList.add("text-gray-600", "text-sm", "mt-2");
        activityLog.appendChild(logEntry);

        alert("You have completed the task successfully!");
    }
}



document.querySelectorAll(".btn.bg-blue-500").forEach((button) => {
    button.addEventListener("click", completeTask);
});

// Clear history functionality
clearHistoryBtn.addEventListener("click", () => {
    const logEntries = activityLog.querySelectorAll("p");
    logEntries.forEach((entry, index) => {
        if (index >= 0) {
            entry.remove();
        }
    });
});


document.getElementById("theme-btn").addEventListener("click", function() {
    
    const lightColors = [
      "#FFB3B3",  
      "#B3FFB3", 
      "#B3D9FF",  
      "#FFF0B3",  
      "#D7A6F7",  
      "#A6F1D1"   
    ];
  
   
    const randomColor = lightColors[Math.floor(Math.random() * lightColors.length)];
  
   
    document.body.style.backgroundColor = randomColor;
  });
  
  





