var button = document.querySelector("button");
var state = true;
function turnPatry(){
	button.classList.toggle('party');

}

button.addEventListener("click",turnPatry);