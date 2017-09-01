'use strict';
// Reverse the string!

var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"
var result = "";
for(var i = (reversed.length - 1); i >= 0; i--){
  result = result.concat((reversed.substr(i,1)));
}
console.log(result);

// console.log("123".concat("123"));