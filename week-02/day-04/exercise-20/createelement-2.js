var ul = document.querySelector("ul");
var li = document.querySelector("li");
ul.removeChild(li);

for(var i = 0; i < 3; i++){
  var newLi = document.createElement("li");
  newLi.textContent = "TheFox";
  ul.appendChild(newLi);

}




