'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial
var n = 4;
function factorio(para){
	
	return para > 1 ? para * factorio ( para - 1) : 1;
}

console.log(factorio(n));