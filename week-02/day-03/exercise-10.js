'use strict';

var lineCount = 6;


// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
var percentage = "%"
var fullPercentage = percentage.repeat(lineCount);
for(var i = 0; i < lineCount; i++){
    var restPercentage = "";    
    for(var j = 0; j < lineCount; j++){
        if(j == 0 || j == i || j == (lineCount - 1)){
            restPercentage = restPercentage.concat(percentage);

        }
        else{
            restPercentage = restPercentage.concat(" ");
        }
    }

    if( i == 0 || i == (lineCount - 1)){
        console.log(fullPercentage);
    }else{
        console.log(restPercentage);
    }
}
