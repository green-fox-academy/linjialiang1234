var button = document.querySelector("button");
var counter = 0;
button.addEventListener("click", function(){
  counter += 1;
  setTimeout(function(){
    var elapsed = document.getElementsByClassName("elapsed");
        elapsed[0].innerHTML = "5 seconds elapsed and clicked " + counter + " times";
  }, 5000);

});
// console.log(button);