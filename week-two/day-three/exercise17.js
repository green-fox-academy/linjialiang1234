
'use strict';

// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)
var arr= [1, 2, 3, 4, 5];

function printer(para){
	for(var i = 0; i < arr.length; i++)
	console.log(para * arr[i]);
}

printer(5);