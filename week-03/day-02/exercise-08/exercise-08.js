var button = document.querySelector("button");
button.addEventListener("click", function(){
  setTimeout(function(){
    var elapsed = document.getElementsByClassName("elapsed");
        elapsed[0].innerHTML = "2 seconds elapsed";
  }, 2000);

});
console.log(button);