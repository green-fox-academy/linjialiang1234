'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

var resultName = [];
function numOfCandies(para) {
  for(var i = 0; i < para.length; i++){
    if(para[i].candies > 4){
       resultName.push(para[i].name);
    }
  }
  return resultName;
}

var averageResult = 0;
function sum(para){
  for(var i = 0; i < para.length; i++){
   averageResult += para[i].age;
  }
  return averageResult = averageResult/para.length;
}
console.log(numOfCandies(students));

console.log(sum(students));