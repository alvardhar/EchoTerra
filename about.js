/* With this function we changes the text inside the element with id="example" */
function changehtml() {
  document.getElementById("example").innerHTML =
    "EchoTerra cares about every step you take.";
}

/* This function changes the style of the same element */
function changecss() {
  document.getElementById("example").style.fontSize = "28px";
  document.getElementById("example").style.color = "#61b390";
}

/* We use it in the onsubmit attribute to decide if the form can be sent or not */
function validateNewsletter() {
  // Here we read the values that the user typed in the form fields.
  var fullname = document.forms["newsletter"]["fullname"].value;
  var emailaddress = document.forms["newsletter"]["emailaddress"].value;

  // If either the name or the email is empty, we stop the form and show a message.
  if (fullname == "" || emailaddress == "") {
    alert("Please fill in both your name and email.");
    return false; // returning false prevents the form from being submitted
  } else {
    // If both fields are filled, we thank the user and allow the form to submit.
    alert("Thank you for joining EchoTerra, " + fullname + "!");
    return true;
  }
}
