function updateDate() {
    
    const dateElement = document.getElementById("date");
    const dayElement = document.getElementById("day");

    
    if (dateElement && dayElement) {
        const today = new Date();
      
        dayElement.textContent = today.toLocaleDateString("en-US", { weekday: "short" }) + " ,";
        dateElement.textContent = today.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    } else {
        console.log("Date or Day element not found. Skipping update.");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    updateDate();
});
