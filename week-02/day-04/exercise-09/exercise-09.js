'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function numOfCandies(para) {

  para.map(function(ele){
    return console.log(ele.candies + " candies are owned by " + ele.name );
    
  })

}

var ageResult = 0;
function sum(para){
  for(var i = 0; i < para.length; i++){
    if(para[i].candies < 5){

      ageResult = ageResult + para[i].age;

    }
  }

  return ageResult;
}
numOfCandies(students);

console.log(sum(students));