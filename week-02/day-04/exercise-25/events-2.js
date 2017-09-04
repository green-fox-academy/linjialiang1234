var button = document.querySelector("button");

button.addEventListener("click", function(e) {
	var li = document.querySelectorAll("li");
	var count = li.length;
	console.log(count);

	var result = document.getElementsByClassName("result");
	console.log(result)
	result[0].textContent = count;
})