var url = "http://localhost:8080/";
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  checkInputEmpty();
});

function checkInputEmpty() {
  var urlValue = document.getElementById("urlInput");
  var titleValue = document.getElementById("titleInput");
  if (urlValue.value === "") {
    alert("Please input the URL!");
    return;
  }
  if (titleValue.value === "") {
    alert("Please input the title!");
    return;
  }
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
      console.log("success receviced data: " + result);
      window.history.back();
    }
  }
  xhr.open("POST", url + "posts", true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(jSONPostData);
}