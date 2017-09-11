var urlValue = document.getElementById("urlInput");
var titleValue = document.getElementById("titleInput");
// var getInputUrl = "";
// var getInputTitle= "";

urlValue.value = localStorage.getItem("url");
titleValue.value = localStorage.getItem("title");

console.log("111+ " + urlValue.value);
console.log("22221+ " + titleValue.value);

var idValue = localStorage.getItem("id");
console.log("2333333+ " + idValue);


var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {

  checkInputEmpty();
});

function checkInputEmpty() {

  
  
  if (urlValue.value === "") {
    alert("Please input the URL!");
    return;
  }
  if (titleValue.value === "") {
    alert("Please input the title!");
    return;
  }
  console.log("urlValue: " + urlValue.value + "titleValue: " + titleValue.value);

  postData(urlValue,titleValue);
}

function postData(urlValue, titleValue) {
  var xhr = new XMLHttpRequest();
  var postData = {
      "title": titleValue.value,
      "href": urlValue.value
    };
  var jSONPostData = JSON.stringify(postData);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success UPDATE data: " + result);
      window.location.href = "./reddit.html";
    }
  }
  xhr.open("PUT", "https://time-radish.glitch.me/posts/"+idValue, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-type", "application/json");  
  xhr.send(jSONPostData);
}