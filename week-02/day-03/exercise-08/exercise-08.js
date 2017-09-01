'use strict';

var lineCount = 8;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

function diamond(lineCount){
    var middle = Math.ceil(lineCount/2);
    for(var i = 0;i < middle;i++){
        console.log(" ".repeat(middle - i - 1) + "*".repeat(2 * i + 1));
    }
    i = i - 2;
    if(middle === lineCount/2){
        console.log(" ".repeat(middle - i - 2) + "*".repeat(2 * i + 3));
    }
    for(i;i >= 0;i--){
        console.log(" ".repeat(middle - i - 1) + "*".repeat(2 * i + 1));
    }
}
diamond(7)