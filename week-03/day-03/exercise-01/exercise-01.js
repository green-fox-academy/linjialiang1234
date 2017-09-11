// API key: 6c4feeab3b57475485c86a03a7222cfd
var xhttp = new XMLHttpRequest();
var mainImage = document.querySelector(".mainImage");

xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var result = JSON.parse(xhttp.responseText);
    var thumbnailImageContainer = document.getElementsByClassName("thumbnailImage");

    for (let i = 0; i < result.data.length; i++) {
      console.log(result.data[i].images.original.url);
      var thumbnailImage = document.createElement("img")
      thumbnailImage.src = result.data[i].images.downsized_still.url;
      thumbnailImage.setAttribute("data-originalImage", result.data[i].images.original.url);
      thumbnailImage.setAttribute("data-downsizedImage", result.data[i].images.downsized_still.url);

      thumbnailImage.addEventListener("click", changeImage);
      thumbnailImage.addEventListener("mouseover", mouseOver);
      thumbnailImage.addEventListener("mouseout", mouseOut);

      thumbnailImageContainer[0].appendChild(thumbnailImage);
    };
  }
}

xhttp.open("GET", "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=6c4feeab3b57475485c86a03a7222cfd&limit=16", true);
xhttp.send();

function changeImage(event) {
  if (mainImage.src === event.target.src) {
    mainImage.src = event.target.getAttribute("data-downsizedImage");
  } else {
    mainImage.src = event.target.getAttribute("data-originalImage");
  }
}

function mouseOver(event) {
  event.target.src = event.target.getAttribute("data-originalImage");
}

function mouseOut(event) {
  event.target.src = event.target.getAttribute("data-downsizedImage");
}