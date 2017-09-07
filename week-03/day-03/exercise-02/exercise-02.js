var xhr = new XMLHttpRequest();
var prevHef = "";
var nextHef = "";
var firstHef = "";
var lastHef = "";

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // var slideIndex = 1;

    var getHeader= xhr.getResponseHeader('link');
    console.log("header " + getHeader);
    var arr = getHeader.match(/https:\/\/\w+(.\w+)+/g);
    // console.log("links "+ links[2]);
    if (arr.length === 3) {
      prevHef = arr[1];
      nextHef = arr[0];
      firstHef = arr[1];
      lastHef = arr[2];
    }
    else {
      nextHef = arr[0];
      prevHef = arr[1];
      firstHef = arr[2];
      lastHef = arr[3];
    }
    
    // console.log(nextHef);
    
    let that = this;
    var nextButton = document.getElementById("next");
    nextButton.addEventListener("click", function(event){
      var showCharacters = document.getElementById("showCharacters");
      // console.log(showCharacters.innerHTML);
      // that.showCharacters.innerHTML = " ";
      // showCharacters.innerHTML = "123";


      var xhr = new XMLHttpRequest();
      console.log(nextHef);
      
      xhr.open('get' , nextHef, true);
      xhr.send();

      if (xhr.readyState == 4 && xhr.status == 200) {

      var nextCharacters = JSON.parse(xhr.responseText);
      show(nextCharacters)
    }
    });
       // console.log("nextButton +" + );



    var characters = JSON.parse(xhr.responseText);

    show(characters);

    // console.log(characters);
  }
}

function show(characters) {
   var url = "";
   var character = document.getElementById("showCharacters");
//   var pic1 = document.getElementById("pic");

   for (let i = 0; i < characters.length; i++) {
     var singleCharacter = document.createElement("div");
     singleCharacter.innerHTML = characters[i].aliases;
    //  console.log("single " + singleCharacter);
     character.appendChild(singleCharacter);

    
     };




   }
 
xhr.open("GET", "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10", true);
xhr.send();