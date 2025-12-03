function changehtml() {
  document.getElementById("example").innerHTML = "EchoTerra cares about every step you take.";
}

function changecss() {
  document.getElementById("example").style.fontSize = "28px";
  document.getElementById("example").style.color = "#61b390";
}

window.onload = function () {
  document.getElementById("date").innerHTML = Date();
};

function validateNewsletter() {
  var fullname = document.forms["newsletter"]["fullname"].value;
  var emailaddress = document.forms["newsletter"]["emailaddress"].value;

  if (fullname == "" || emailaddress == "") {
    alert("Please fill in both your name and email.");
    return false;
  } else {
    alert("Thank you for joining EchoTerra, " + fullname + "!");
    return true;
  }
}
