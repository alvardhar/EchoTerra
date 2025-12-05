/*
  EchoTerra cookies script

  Our idea: show a small cookie banner the first time a user visits the site.
  If they click "Accept", we save this choice in a cookie so the banner
  does not appear again for a while.
*/

/* First, we create a function to save a cookie with a name, value and duration. */
function setCookie(name, value, days) {
  var now = new Date();
  // Here we convert days into milliseconds and add it to the current time.
  now.setTime(now.getTime() + (days * 24 * 60 * 60 * 1000));
  var expiresText = "expires=" + now.toUTCString();
  // We build one string that contains: name, value, expiry date and path.
  document.cookie = name + "=" + value + ";" + expiresText + ";path=/";
}

/* Next, we create a function to read a cookie by its name. */
function getCookie(name) {
  var target = name + "=";
  // document.cookie gives all cookies in one long string, so we split it.
  var allCookies = decodeURIComponent(document.cookie).split(";");
  var i;
  for (i = 0; i < allCookies.length; i++) {
    var c = allCookies[i].trim();
    // If this part starts with our cookie name, we return its value.
    if (c.indexOf(target) === 0) {
      return c.substring(target.length, c.length);
    }
  }
  // If we do not find the cookie, we return an empty string.
  return "";
}

/*
  When the home page finishes loading, we:
  1) check if the cookie banner exists,
  2) check if the user already accepted cookies,
  3) if not, we show the banner and wait for the click on the button.
*/
window.onload = function () {
  var banner = document.getElementById("cookie-banner");
  if (!banner) {
    // If the HTML for the banner is not on this page, we stop here.
    return;
  }

  // We look for a cookie that tells us the user already accepted.
  var consent = getCookie("echoterra_cookie_ok");
  if (consent === "yes") {
    banner.style.display = "none";
    return;
  }

  // If we reach this point, the banner is visible and we wait for a click.
  var button = document.getElementById("accept-cookies");
  button.onclick = function () {
    // We save the choice in a cookie for 180 days.
    setCookie("echoterra_cookie_ok", "yes", 180);
    // Then we hide the banner.
    banner.style.display = "none";
  };
};
