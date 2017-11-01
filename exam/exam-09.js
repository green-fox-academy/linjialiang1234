'use strict';

let arr = [1, 3, 8, 6, 7, 4];
let arrayOfSecondElements = [];

function getMaxNumber (arg) {
  if(arg.length === 0) {
    return "This is a empty array, so there is no largest number."
  }

  if(arg.length === 1) {
    return "The array length is 1, so the largerst number is " + arg[0] + ".";
  }

  for (let i = 0; i < arr.length; i ++) {
    if(i % 2  === 1) {
      arrayOfSecondElements.push(arr[i]);
    }
  }

  let maxNumber = 0;
  for(let i = 0 ; i < arrayOfSecondElements.length; i++) {
    if(arrayOfSecondElements[i] > maxNumber ) {
      maxNumber = arrayOfSecondElements[i];
    }
  }

  return "The biggest element from each of its second elements is " + maxNumber + ".";
}

console.log(getMaxNumber(arr));

