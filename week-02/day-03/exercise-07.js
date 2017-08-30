'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
var spaceResult = "";
var starResult = "";
var result = "";
var newline = "\n";
for(var i = 1 ; i <= lineCount ; i++){
	for(var spac = (lineCount - i); spac >= 0; spac--){
		
		spaceResult += " "; 			
	}
	for(var star = 1; star <= (i * 2 - 1); star++){
		// console.log("*");
		starResult += "*"; 
	}

	result += spaceResult.concat(starResult).concat(newline);

}

console.log(result);