var url = "http://localhost:8080/";
var urlValue = document.getElementById("urlInput");
var titleValue = document.getElementById("titleInput");
urlValue.value = localStorage.getItem("url");
titleValue.value = localStorage.getItem("title");

var idValue = localStorage.getItem("id");
var getIdElement = document.getElementById("idNumber");
getIdElement.innerHTML = "#" + idValue;

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
  putData(urlValue,titleValue);
}

function putData(urlValue, titleValue) {
  var xhr = new XMLHttpRequest();
  var postData = {
      "title": titleValue.value,
      "href": urlValue.value
    };
  var jSONPostData = JSON.stringify(postData);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success UPDATE data: " + result);
      window.location.href = "./reddit.html";
    }
  }
  xhr.open("PUT", url + "posts/" + idValue, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-type", "application/json");  
  xhr.send(jSONPostData);
}