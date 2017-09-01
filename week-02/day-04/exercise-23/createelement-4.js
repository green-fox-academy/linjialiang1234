 var planetData = [
      {
        category: 'inhabited',
        content: 'Foxes',
        asteroid: true
      },
      {
        category: 'inhabited',
        content: 'Whales and Rabbits',
        asteroid: true
      },
      {
        category: 'uninhabited',
        content: 'Baobabs and Roses',
        asteroid: true
      },
      {
        category: 'inhabited',
        content: 'Giant monsters',
        asteroid: false
      },
      {
        category: 'inhabited',
        content: 'Sheep',
        asteroid: true
      }
    ]

var li = document.querySelector("li");
var ul = document.querySelector("ul");

ul.removeChild(li);

for(var i = 0; i < planetData.length; i++){
	if (planetData[i].asteroid == true){
		var newLi =document.createElement("li");
		newLi.setAttribute("class", "planetData.[i].category");
		console.log(planetData[i].content);
		newLi.textContent = planetData[i].content;
		ul.appendChild(newLi);
	}
}