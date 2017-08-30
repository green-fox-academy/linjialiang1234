'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

var length = 33.3;
var width = 44.4;
var height = 55.5

var surface = (length * width + width * height + height * length) * 2;
var volume = length * width * height;

console.log("Surface Area: " + surface);
console.log("Volume: " + volume);