// Write a cookie and store it on a client for a day
//  Create a simple web page with a button on it
//  Use Local Storage to record how often that button has been clicked
//  Show that number on your page
 
function setCookie(cookieKey, cookieValue, exdays) {
const cookieDate = new Date();
const expiryDaysInMs = exdays * 24 * 60 * 60 * 1000;
cookieDate.setTime(cookieDate.getTime() + expiryDaysInMs);
let expires = "expires="+ cookieDate.toUTCString();
document.cookie = cookieKey + "=" + cookieValue + ";" + expires +
";path=/";
}
setCookie('visitor_data', 'Maria', 20);


function getCookie(cookieKey) {
let name = cookieKey + "=";
let myCookie = document.cookie.split(';');
for(let i = 0; i < myCookie.length; i++) {
let theCookie = myCookie[i];
while (theCookie.charAt(0) == ' ') {
theCookie = theCookie.substring(1);
}
if (theCookie.indexOf(name) == 0) {
return theCookie.substring(name.length, theCookie.length);
}
}
return "";
}
console.log(getCookie('visitor_data'));

//count buttons
let count = 0;
let btn = document.getElementById("collector-btn");
let disp = document.getElementById("numb-display");

btn.addEventListener("click", function() {
    count++;
    disp.innerHTML = count;
});

//window.localStorage.setItem('function()', JSON.stringify(function()));
//JSON.parse(window.localStorage.getItem('function()'));




// document.cookie = 
//     "courseName=webDeveopment bootcamp; expires = Thu, 5 March 2030 12:00:00 UTC; path = /"

// function getCookie(cookieName) {
//     const cookies = document.cookie.split('; ');
//     for (const cookie of cookies) {
//         const [name, value] = cookie.split('=');
//         if (name === cookieName) {
//             return decodeURIComponent(value);
//         }
//     }
//     return null;
// }
// const courseName = getCookie('courseName');
// console.log('Course Name:', courseName);