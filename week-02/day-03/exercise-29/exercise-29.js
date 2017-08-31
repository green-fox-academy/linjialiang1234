'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
var lineCount = 4;
var matrix = [];
for(var i = 0; i < lineCount; i++){
    if(!matrix[i]) matrix[i] = [];
    for(var j = 0; j < lineCount; j++){
        if(j == (lineCount -1 - i)){
            matrix[i].push(1);
        }
        else{
            matrix[i].push(0);
        }

        // console.log(matrix[i][j]);
        
    }
    var resultLine = [];
    for(var j = 0; j < lineCount; j++){
        resultLine.push(matrix[i][j]);
    }
    console.log(resultLine.join(" "));
    


}
