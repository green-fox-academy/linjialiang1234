'use strict';

// Create a program that writes this line 100 times:
// "I like trains!"
var str = "I like trains"

function repeat(str, n){ 
	return (n <= 0) ? "" :  str.concat("\n" + repeat(str, --n));
}
console.log(repeat(str, 100));