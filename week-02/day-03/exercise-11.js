// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//
var tableLength = 10;
var str = "%%%%";
for(var i = 0; i < tableLength; i++){
    if(i % 2 == 0){
        console.log(str);

    }
    else{
        console.log(" ".concat(str));
    }
}