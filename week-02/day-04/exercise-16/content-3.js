var textOutput1 = document.getElementsByClassName("output1");
var textOutput2 = document.getElementsByClassName("output2");
var textPara1 = document.getElementsByTagName("p");

// console.log(textPara1[0].textContent);
// console.log()
textOutput1[0].textContent = textPara1[0].textContent; 
textOutput2[0].innerHTML = textPara1[0].innerHTML; 
