'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
var Hours = 23 - currentHours;
var Minutes = 59 - currentMinutes;
var Seconds = 60 - currentSeconds;

var remainingSeconds = Hours * 3600 + Minutes * 60 + Seconds;

console.log("The remaining seconds is " + remainingSeconds + ".");


