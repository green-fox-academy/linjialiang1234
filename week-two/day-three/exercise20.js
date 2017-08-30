'use strict';
// - Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element
var r = [54, 23, 66, 12];
r = parseInt(r.slice(1,2)) + parseInt(r.slice(2,3));
console.log(r);