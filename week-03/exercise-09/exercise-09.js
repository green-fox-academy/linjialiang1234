'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'

function Circle(radius) {
  this.circumference = 2 * 3.14 * radius;
  this.area = 3.14 * radius * radius;
  this.getCircumference = function() {
    return this.circumference;
  }
  this.getArea = function() {
    return this.area;
  }
  this.toString = function() {
    return "Radius: " + radius + ", Circumference: " + this.circumference + ", Area: " + this.area;
  }
}

// var abc = new Circle(9);
// console.log(abc.toString());
// console.log(abc.getCircumference());
// console.log(abc.getArea());


