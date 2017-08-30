'use strict';

var lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var result = "";
var restResult="";
var newline = "\n";
for(var i = 1 ; i <= Math.ceil(lineCount/2) ; i++){
	var spaceResult = "";
	var starResult = "";
	
	for(var spac = (lineCount/2 - i); spac > 0; spac--){
		
		spaceResult += " "; 			
	}
	for(var star = 1; star <= (i * 2 - 1); star++){
		starResult += "*"; 
	}

	result += spaceResult.concat(starResult).concat(newline);

}



for(var i = 1 ; i <= Math.ceil(lineCount/2) ; i++){
	var spaceResult = "";
	var starResult = "";
  
  for(var star = 1; star <= (i * 2 - 1); star++){
		spaceResult += " "; 
	}
	for(var spac = Math.ceil((lineCount/2 - i)); spac >= 0; spac--){
		
		starResult += "*"; 			
	}


	restResult += spaceResult.concat(starResult).concat(newline);

}



 console.log(result);
console.log(restResult);