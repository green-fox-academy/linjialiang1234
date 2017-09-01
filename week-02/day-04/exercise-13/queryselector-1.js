var king = document.getElementById("b325");
console.log(king.textContent);

var conceited = document.getElementsByClassName("b326");
alert(conceited[0].textContent);

var businessLamp = document.getElementsByClassName("big");
for(var i = 0 ; i < businessLamp.length; i++) {
	console.log(businessLamp[i].textContent);
}

var conceitedKing = document.getElementsByClassName("container")[0].getElementsByTagName("div");
for(var i = 0 ; i < conceitedKing.length; i++) {
	alert(conceitedKing[i].textContent);
}

var noBusiness = document.querySelectorAll("div");
for(var i = 0; i < noBusiness.length; i++){
	console.log("noBusiness: " + noBusiness[i].textContent);
}

var allBizniss = document.querySelector("p");
alert(allBizniss.textContent);


