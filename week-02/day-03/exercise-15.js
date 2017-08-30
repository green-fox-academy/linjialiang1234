
'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

var result = 0;
function sum(para){
	for(var i = 1; i<= para; i++){
		result += i;
	}
	return result;
}

console.log(sum(5));