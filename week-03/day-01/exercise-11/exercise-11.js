'use strict';

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

function CarStore(cars) {
  this.cars = cars;
  this.addCar = function (type, price, year) {
    var obj = {
      type: type,
      price: price,
      year: year
    }
    cars.push(obj)
  };
  this.getSumPrice = function () {
    var sumPrice = 0;
    for (var i = 0; i < cars.length; i++) {
      sumPrice += cars[i].price;
    }
    return sumPrice;
  };
  this.getOldestCarType = function () {
    var theOldestYear = 2017;
    var theOldestCarType = []
    for (var i = 0; i < cars.length; i++) {
      if (cars[i].year < theOldestYear) {
        theOldestCarType = cars[i].type;
        theOldestYear = cars[i].year;
      }
    }
    return theOldestCarType;
  }
  this.deleteCarByType = function (type) {
    cars = cars.filter(function (ele) {
      return ele.type !== type;
    });
  }
}

var cars = [{
    type: 'Dodge',
    price: 20000,
    year: 2012
  },
  {
    type: 'Tesla',
    price: 30000,
    year: 2015
  },
  {
    type: 'Nissan',
    price: 12000,
    year: 2010
  },
  {
    type: 'Trabant',
    price: 2000,
    year: 1980
  },
  {
    type: 'Ferrari',
    price: 40000,
    year: 2001
  }
];

var carStore = new CarStore(cars);

carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000
console.log(carStore.getOldestCarType()); // 'Trabant'
carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000