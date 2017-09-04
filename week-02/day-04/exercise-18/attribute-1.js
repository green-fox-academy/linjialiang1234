var img = document.querySelector("img");
var imgUrl = img.getAttribute("src");
console.log(imgUrl);

img.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/736x/7c/5f/bf/7c5fbfa26e6bf2306141b46082a5bd0f--scripts-sole.jpg");

var forUrl = document.querySelector("a");
forUrl.setAttribute("href", "https://www.greenfoxacademy.com/" );

var button = document.querySelector("button");
button.setAttribute("disabled", "disabled");

button.textContent = "Don't click me!";