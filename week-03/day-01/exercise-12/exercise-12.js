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
    if (type === "falcon1" && fuelLevel >= 1) {
      this.fuelLevel -= 1;
      this.numberOFLaunches += 1;
    }
    if (type === "falcon9" && fuelLevel >= 9) {
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

function SpaceX(storedFuel) {
  this.storedFuel = storedFuel;
  var rockets = [];
  this.addRocket = function(rocket) {
      rockets.push(rocket);

  };
  this.refillAll = function() {
    rockets.forEach(function(ele) {
      this.storedFuel -= ele.refill();
    });

  };
  this.launchAll = function() {
    rockets.forEach(function(ele) {
      ele.launch();
    })
  };
  this.buyFuel = function(amount) {
    this.storedFuel += amount;
  };
  this.getStats = function() {
    return "rockets: " + rockets.length + ",fuel: " + this.storedFuel + " ,launches: " + this.numberOFLaunches;
  }

}

var falcon1 = new Rocket('falcon1')
var returnedFalcon9 = Rocket('falcon9', 11, 1)

falcon1.refill() // 5
falcon1.launch()

console.log(falcon1.getStats()) // name: falcon1, fuel: 4, launches: 1
console.log(returnedFalcon9) // name: falcon9, fuel: 11, launches: 1
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