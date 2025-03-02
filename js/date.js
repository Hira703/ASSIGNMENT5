function updateDate() {
    // Attempt to get elements from the DOM
    const dateElement = document.getElementById("date");
    const dayElement = document.getElementById("day");

    // Ensure that both elements exist before trying to modify them
    if (dateElement && dayElement) {
        const today = new Date();
        
        // Format the day and date
        dayElement.textContent = today.toLocaleDateString("en-US", { weekday: "short" }) + " ,";
        dateElement.textContent = today.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    } else {
        console.log("Date or Day element not found. Skipping update.");
    }
}

// Wait for the DOM to be fully loaded before calling updateDate
document.addEventListener("DOMContentLoaded", function() {
    updateDate();
});
