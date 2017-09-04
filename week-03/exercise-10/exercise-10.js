'use strict';

// Create a constructor called PirateHorde, that takes an array of pirates as a parameter:
// It should have an "addPirate" method that adds a pirate object to it's list
// It should have a "getSumGold" method that returns the sum of all pirates gold
// It should have a "getLongestName" method that returns the name of the pirate that has the longest
// It should have a "getTheWoodenLegNames" method that retuns the names of the pirates that has wooden leg




var pirates = [
  {name: 'Jack', gold: 4, hasWoodenLeg: true},
  {name: 'Bob', gold: 0, hasWoodenLeg: false},
  {name: 'Olaf', gold: 3, hasWoodenLeg: true},
  {name: 'Steve', gold: 2, hasWoodenLeg: true},
  {name: 'Ian', gold: 10, hasWoodenLeg: false},
];



function PirateHorde(pirates){
  this.addPirate = function (name,gold,hasWoodenLeg){
    this.name = name;
    this.gold = gold;
    this.hasWoodenLeg = hasWoodenLeg;

    console.log("1" + this.name);
    console.log("2" + this.gold);
    console.log("3" + this.hasWoodenLeg);
    pirates.name = this.name;
    pirates.gold = this.gold;
    pirates.hasWoodenLeg = this.hasWoodenLeg;
  };

  
  this.getSumGold = function() {
      var sumGold = 0;
      for(var i = 0; i< pirates.length; i++) {
       sumGold = sumGold + pirates[i].gold;
        // return sumGold += pirates[i].gold;
      }
      return sumGold;
      
  };
  this.getLongestName = function() {
      var lengthOFLongestName = 0;
      var longestName = "";
      for(var i = 0; i< pirates.length; i++) {
        if(pirates[i].name.length > lengthOFLongestName) {
          console.log("123 " + pirates[i].name.length);
          lengthOFLongestName = pirates[i].name.length;
          longestName = pirates[i].name;
          console.log("longestname " + longestName);
          
        }
      }
      return longestName;
  }
  this.getTheWoodenLegNames = function() {
      var namesOfWoodenLeg = [];
      for(var i =0; i < pirates.length; i++) {
        if(pirates[i].hasWoodenLeg === true) {
          namesOfWoodenLeg.push(pirates[i].name);
        }
      }

      return namesOfWoodenLeg;
  }
}
var pirateHorde = new PirateHorde(pirates);

pirateHorde.addPirate('Greg', 6, true);
console.log(pirateHorde.getSumGold()); // 25
console.log(pirateHorde.getLongestName()); // 'Steve'
console.log(pirateHorde.getTheWoodenLegNames()); // ['Jack', 'Olaf', 'Steve', 'Greg']
