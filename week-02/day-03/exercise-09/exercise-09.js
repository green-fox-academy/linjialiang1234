'use strict';

var lineCount = 10;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
var percentage = "%"
var fullPercentage = percentage.repeat(lineCount);
var restPercentage = "";
for(var i = 0; i < lineCount; i++){
  if(i == 0 || i == (lineCount - 1)){
    restPercentage = restPercentage.concat(percentage);

  }
  else{
    restPercentage = restPercentage.concat(" ");
  }

}

for(var i = 0; i < lineCount; i++){
  if(i == 0 || i == (lineCount - 1)){
    console.log(fullPercentage);
  }
  else{
    console.log(restPercentage);
  }
}