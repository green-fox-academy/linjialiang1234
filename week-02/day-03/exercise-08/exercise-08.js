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

function draw(lineCount){
    var midNum = Math.ceil(lineCount/2);
    for(var i=0;i<midNum;i++){
        console.log(" ".repeat(midNum-i-1) + "*".repeat(2*i+1));
    }
    i = i-2;
    if(midNum === lineCount/2){
        console.log(" ".repeat(midNum-i-2) + "*".repeat(2*i+3));
    }
    for(i;i>=0;i--){
        console.log(" ".repeat(midNum-i-1) + "*".repeat(2*i+1));
    }
}
draw(8)