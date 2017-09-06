// 6c4feeab3b57475485c86a03a7222cfd
// httpRequest = new XMLHttpRequest();

   var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(xhttp.responseText);
       console.log(result);

      for(let i = 0; i < result.data.length; i++) {
          console.log(result.data[i].images.original.url);
          var stillNewImage = document.createElement("img")
          stillNewImage.src = result.data[i].images.downsized_still.url;
          stillNewImage.id = "img" + i;
          stillNewImage.className = "img";

          stillNewImage.addEventListener("click", function(event){

            var animatedNewImage = document.createElement("img");
            // console.log("1111111+ " + i);
            animatedNewImage.src = result.data[i].images.original.url;
            var mainTag = document.querySelector("main");
      
            document.querySelector("main").replaceChild(animatedNewImage);
          });

          var divTag = document.querySelector("div");
          console.log(divTag);
          divTag.appendChild(stillNewImage);

          
          
      }

      // var animatedNewImage = document.createElement("img");
      // animatedNewImage.src = result.data[0].images.original.url;
      // var mainTag = document.querySelector("main");

      // mainTag.appendChild(animatedNewImage);

    }
  };
  xhttp.open("GET", "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=6c4feeab3b57475485c86a03a7222cfd&limit=16", true);
  xhttp.send();

  // var allImages = document.getElementsByClassName("img");

  // console.log("222" + allImages[0]);
  // allImages.addEventListener("click", function(event){
  //   console.log("123");
  // });