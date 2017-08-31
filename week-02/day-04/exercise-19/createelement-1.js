var asteroids = document.querySelector("ul");
var newAsteroids1 = document.createElement("li");
newAsteroids1.textContent = "The Green Fox";
asteroids.appendChild(newAsteroids1);

var newAsteroids2 = document.createElement("li");
newAsteroids2.textContent ="The Lamplighter";
asteroids.appendChild(newAsteroids2)

var container =document.getElementsByClassName("container");
var heading = document.createElement("h1");
heading.textContent = "I can add elements to the DOM!";
container[0].appendChild(heading);

var img = document.createElement("img");
img.setAttribute("src","http://www.drodd.com/images15/1-10.png");
container[0].appendChild(img);


