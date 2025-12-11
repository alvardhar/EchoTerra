// Simple validation and success message
document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual form submission

    alert("Payment successful! Thank you for your purchase.");
    // Redirect to a confirmation page if you want:
    // window.location.href = "confirmation.html";
});
 