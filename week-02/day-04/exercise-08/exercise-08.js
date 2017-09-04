'use strict';

// Check if the array contains "7" if it contains print "Hoorray" otherwise print "Noooooo"

var numbers = [1,2,3,4,5,6,8]

numbers = numbers.every(function(ele){
  ele === 7; 
})

if(numbers) {
  console.log("Hooray");
} else {
  console.log("Noooooo");
}

