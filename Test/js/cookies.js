
function isThereSomeCookiesExisting(){
  if (document.cookie != null) {
    return true;
  }
  else {
    return false;
  }
}

function createCookie(){
  var username = post.getElementsByName('Username');
  document.cookie = "username=" + username + "; expires=Sun, 18 Feb 2018 00:00:00 UTC;";
}

function reconizeUser(){
  var username = document.cookie;

}

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}
