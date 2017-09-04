var ul = document.querySelector("ul");
var li = document.querySelector("li");

ul.removeChild(li);

var list = ['apple', 'bubble', 'cat', 'green fox'];

for(var i = 0; i < list.length; i++) {
  var newLi = document.createElement("li");
  newLi.textContent = list[i];
  ul.appendChild(newLi);
}