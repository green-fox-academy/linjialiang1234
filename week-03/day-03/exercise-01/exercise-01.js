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
      
            document.querySelector("main")[0].replaceChild(animatedNewImage);
          });


        //  stillNewImage.addEventListener("mouseover", function(event) {
        //     event.target.src = result.data[i].images.original.url;      	
        //   });
        //   // div.appendChild(img);
    
        //   stillNewImage.addEventListener("mouseout", function(event) {
        //     event.target.src = result.data[i].images.downsized_still.url;      	
        //   }); 
    

          var divTag = document.querySelector("div");
          console.log(divTag);
          divTag.appendChild(stillNewImage);

          
          
      }

    

    }
  };
  xhttp.open("GET", "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=6c4feeab3b57475485c86a03a7222cfd&limit=16", true);
  xhttp.send();
