var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // var slideIndex = 1;

    var getHeader= xhr.getResponseHeader('link');
    console.log("header " + getHeader);
    var links = getHeader.match(/https:\/\/\w+(.\w)+/g);
    console.log("links "+ links[2]);
    

    var store

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
     console.log("single " + singleCharacter);
     character.appendChild(singleCharacter);

     var nextButton = document.getElementById("next");
     nextButton.addEventListener("click", function(event){
        // console.log("nextButton +" + );
     });
//     image.src = pic.data[i].images.downsized_still.url;
//     image.addEventListener("click", function (event) {
//       if (pic1.src === pic.data[i].images.original.url) {
//         pic1.src = pic.data[i].images.downsized_still.url;
//       } else {
//         pic1.src = pic.data[i].images.original.url;
//       }
//     })


//     image.addEventListener("mouseover", function (event) {
//       event.target.src = pic.data[i].images.original.url;
//     });
//     image.addEventListener("mouseout", function (event) {
//       event.target.src = pic.data[i].images.downsized_still.url;
//     });
//     picture.appendChild(image);
   }
 }
xhr.open("GET", "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10", true);
xhr.send();