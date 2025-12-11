function validateForm() {
    var form = document.forms["contactForm"];
    var email =form["email"].value;
    var feedback =form["feedback"].value;
    if (email == "") {
        alert("Please enter your email address.");
    }
    else if (feedback == "") {
        alert("Please enter your feedback.");
    }
    else {
        alert("Thank you for your feedback we will be back as soon as possible !");
    }
}