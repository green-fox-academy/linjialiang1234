var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var slideIndex = 1;
    var pic = JSON.parse(xhr.responseText);
    console.log(pic);
    display(pic);
  }
}


function display(pic) {
  var picture = document.getElementById("thumbnail");
  var pic1 = document.getElementById("pic");

  for (let i = 0; i < 16; i++) {
    var image = document.createElement("img");
    image.src = pic.data[i].images.downsized_still.url;
    image.addEventListener("click", function (event) {
      if (pic1.src === pic.data[i].images.original.url) {
        pic1.src = pic.data[i].images.downsized_still.url;
      } else {
        pic1.src = pic.data[i].images.original.url;
      }
    })


    image.addEventListener("mouseover", function (event) {
      event.target.src = pic.data[i].images.original.url;
    });
    image.addEventListener("mouseout", function (event) {
      event.target.src = pic.data[i].images.downsized_still.url;
    });
    picture.appendChild(image);
  }
}
xhr.open("GET", "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=6c4feeab3b57475485c86a03a7222cfd", true);
xhr.send();