'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.
var regex = /e/g;
var numberOfE = fruits.map(function(ele, index){
  var result = ele.match(regex);
  var count = !result ? 0 : result.length;
  return count;
})

console.log(numberOfE);