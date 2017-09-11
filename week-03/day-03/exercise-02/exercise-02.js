var previousLink = "";
var nextLink = "";
var firstLink = "";
var lastLink = "";

window.addEventListener("load", initPage)

function initPage(){
	var firstButton = document.getElementById("first");
	var lastButton = document.getElementById("last");
	var nextButton = document.getElementById("next");
	var previousButton = document.getElementById("previous");

	firstButton.addEventListener("click", function(){changeIndex(firstLink)});
	lastButton.addEventListener("click", function(){changeIndex(lastLink)});
	nextButton.addEventListener("click", function(){changeIndex(nextLink)});
	previousButton.addEventListener("click" ,function(){changeIndex(previousLink)});


	var xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", function(){updatePage(xhr)});
	xhr.open('GET', 'https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10');
  xhr.send();
}

function updatePage(xhr) {
	if (xhr.readyState == 4 && xhr.status == 200) {
		  var dataHeader = xhr.getResponseHeader('link');
		  var arr = dataHeader.match(/https:\/\/\w+(.\w+)+/g);

		  if(arr.length === 3) {
		  	previousLink = arr[1];
		  	nextLink = arr[0];
		  	firstLink = arr[1];
		  	lastLink = arr[2];
		  } else {
		  	nextLink = arr[0];
		  	previousLink = arr[1];
		  	firstLink = arr[2];
		  	lastLink = arr[3];
		  }
		  var data = JSON.parse(xhr.responseText);
			displayResult(data);
	}
}

function displayResult(data) {
	var container = document.getElementById("characters-container");
	for(let i = 0; i < data.length; i++){
		var newCharacter = document.createElement("div");
		newCharacter.innerText = data[i].aliases[0];
		container.appendChild(newCharacter);
	}
}

function changeIndex(link) {
	var container = document.getElementById("characters-container");
	container.textContent = "";
	console.log(link);
	var xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", function(){updatePage(xhr)});
	xhr.open("GET",link);
	xhr.send();
}