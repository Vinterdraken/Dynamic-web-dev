
/**
* This function is creating a cookie
* cName is the name of the cookie
* cValue is the value stored by the cookie
* exdays is the number of day that the cookie will stay alive :3
*/
function setCookie(cName, cValue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    cValueInLower = cValue.toLowerCase();    
    document.cookie = cName + "=" + cValueInLower + ";" + expires + "; Path=/";
}

/**
* This function allow us to get the value of a cookie
* cName is the name of the cookie that we want the value from
*/
function getCookie(cName) {
    var name = cName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
* This function will check the cookies, if there not existing or empty it will ask the user some information, about his name/pseudo and the current country where he is
* if the cookies are existing then it will ask if the user still in the last country stored 
*/
function checkCookies() {
    var usernameCookie = getCookie("username");
    var countryCookie = getCookie("country");
    var tutorialCookie = getCookie("tutorial");

    console.log(usernameCookie);
    console.log(countryCookie);
    console.log(tutorialCookie);

    if (usernameCookie != "" && countryCookie != "" && tutorialCookie == "done") {
        var newCountry = prompt("Hi " + usernameCookie + "! It's good to see you again. :D \nLast time you told me you where in " + countryCookie + ". \nPlease if you're not there anymore, let me know where you are now :)", countryCookie);
        setCookie("country", newCountry, 365);
    } 
    else if(usernameCookie != "" && countryCookie != "" && tutorialCookie == "todo"){
        alert("This is a short tutorial to explain you how I work, please read this to make sure you'll understand my behavior :)");
        setCookie("tutorial", "done", 365);         
    }
    else {
        var username = prompt("Hi there ! I'm the Culture Web App, what's your name ? :D (You can use a pseudo if you want)", "");
        var country = prompt("I'd like to know your location, this way I'll can make your experience with me better ;)", "");

        if (username != "" && username != null && country != "" && country != null) {
            setCookie("username", username, 365);
            setCookie("country", country, 365);
            setCookie("tutorial", "todo", 365);             
        }
        
        var answer = prompt("This is a short tutorial to explain you how I work, please read this to make sure you'll understand my behavior. Please write \"yes\" in the text input below to let me know that you're aware :)", "");
        if(answer.toLowerCase() == "yes"){
            setCookie("tutorial", "done", 365);
        }             
       
    }
}

/**
* This function kill all our cookies :'(
*/
function deleteCookie() {

    setCookie("username", "", -1); 
    setCookie("country", "", -1); 
    setCookie("tutorial", "", -1);

    alert("THE COOKIES HAVE BEEN SLAIN! x.x");
};
