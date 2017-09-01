'use strict';
// Add "e" to every string in far

var far = ["appl", "fiddl", "Bruce Le", "hom"];
far = far.map(function(ele){
  return ele.concat("e");
})
console.log(far);