// signup.js

const signupForm = document.getElementById('signupForm');

// Listen for form submission
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    // Redirect to register.html
    window.location.href = 'register.html';
});

