document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const message = document.getElementById("message");

    // Hide the message at the start
    message.style.display = "none";

    // When the form is submitted
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop page reload
        message.style.display = "block"; // Show the message
        form.reset(); // Optional: clears the input box
    });
});
