// Rocket

// Create a Rocket class.
// It should take 3 parameters in its constructor
// 1st parameter: the type of the rocket as a string, "falcon1" or "falcon9".
// 2nd parameter: the starting fuel level as a number, defaults to 0.
// 3rd parameter: number of launches as a number, defaults to 0.
// It should have 3 methods:
// launch()
// it should use 1 fuel if it's a falcon1 and 9 fuels if it's a falcon9.
// it should increment the launches by one if it had enough fuel for the launch.
// refill()
// it should refill the rocket's fuel level to 5 if falcon1 and to 20 if falcon9.
// it should return the amount of fuel used for the refill.
// example: if the rocket is a falcon1 and has fuel level 3, then it should return 2.
// getStats()
// it should return its stats as a string like: "name: falcon9, fuel: 11, launches: 1"

function Rocket(type, fuelLevel, numberOFLaunches) {
  this.type = type;
  if (fuelLevel === undefined) {
    this.fuelLevel = 0;
  } else {
    this.fuelLevel = fuelLevel;
  }

  if (numberOFLaunches === undefined) {
    this.numberOFLaunches = 0;
  } else {
    this.numberOFLaunches = numberOFLaunches;
  }


  this.launch = function () {
    if (this.type === "falcon1" && this.fuelLevel >= 1) {
      this.fuelLevel -= 1;
      this.numberOFLaunches += 1;
    }
    if (this.type === "falcon9" && this.fuelLevel >= 9) {
      this.fuelLevel -= 9;
      this.numberOFLaunches += 1;
    }

  }

  this.refill = function () {
    var usedFuel = 0;
    // var amountOfFuelUsed = 0
    if (type === "falcon1") {
      usedFuel = 5 - this.fuelLevel;
      this.fuelLevel = 5;
    } else {
      usedFuel = 20 - this.fuelLevel;
      this.fuelLevel = 20;
    }

    return usedFuel;
  }

  this.getStats = function () {
    return "name: " + this.type + ", fuel: " + this.fuelLevel + ", launches: " + this.numberOFLaunches; + "'/'";
  }
}

// SpaceX

// Create a SpaceX class.
// it should take 1 parameter in its constructor: the stored fuel
// it should have 4 methods:
// addRocket(rocket)
// it should add a new rocket to SpaceX that is given in its first parameter
// use the rockets from the fourth exercise.
// refillAll()
// it should refill all of its rockets with fuel and subtract the needed fuel from the storage
// launchAll()
// it should launch all the rockets
// buyFuel(amount)
// it should increase stored fuel by amount
// getStats()
// it should return its stats as a sting like: "rockets: 3, fuel: 100, launches: 1"

function SpaceX(storedFuel) {
  this.storedFuel = storedFuel;
  var rockets = [];
  this.launcheNumber = 0;
  this.addRocket = function(rocket) {
      rockets.push(rocket);
      this.launcheNumber += rocket.numberOFLaunches;

  };
  this.refillAll = function() {
    let that = this;
    rockets.forEach(function(value) {
    that.storedFuel -= value.refill();
    });
  };
  this.launchAll = function() {
    let that = this;
    rockets.forEach(function(ele) {
      ele.launch();
      that.launcheNumber += 1;
    })
  };
  this.buyFuel = function(amount) {
    this.storedFuel += amount;
  };
  this.getStats = function() {
    return "rockets: " + rockets.length + ",fuel: " + this.storedFuel + " ,launches: " + this.launcheNumber;
  }
}

var falcon1 = new Rocket('falcon1')
var returnedFalcon9 = new Rocket('falcon9', 11, 1)

falcon1.refill() // 5
falcon1.launch()

console.log(falcon1.getStats()) // name: falcon1, fuel: 4, launches: 1
console.log(returnedFalcon9.getStats()); // name: falcon9, fuel: 11, launches: 1
var spaceX = new SpaceX(100)
var falcon1 = new Rocket('falcon1', 0, 0)
var falcon9 = new Rocket('falcon9', 0, 0)
var returnedFalcon9 = new Rocket('falcon9', 11, 1)

console.log(returnedFalcon9.getStats()) // name: falcon9, fuel: 11

spaceX.addRocket(falcon1)
spaceX.addRocket(falcon9)
spaceX.addRocket(returnedFalcon9)

console.log(spaceX.getStats()) // rockets: 3, fuel: 100, launches: 1
spaceX.refillAll()
console.log(spaceX.getStats()) // rockets: 3, fuel: 66, launches: 1
spaceX.launchAll()
console.log(spaceX.getStats()) // rockets: 3, fuel: 66, launches: 4
spaceX.buyFuel(50)
console.log(spaceX.getStats()) // rockets: 3, fuel: 116, launches: 4
