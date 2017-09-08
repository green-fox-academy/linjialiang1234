var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  checkInputEmpty();
});

function checkInputEmpty() {
  var urlValue = document.getElementById("urlInput");
  var titleValue = document.getElementById("titleInput");
  // var getInputUrl = "";
  // var getInputTitle= "";
  if (urlValue.value === "") {
    alert("Please input the URL!");
  }
  if (titleValue.value === "") {
    alert("Please input the title!");
  }
  console.log("urlValue: " + urlValue.value + "titleValue: " + titleValue.value);

  postData(urlValue,titleValue);
}

function postData(urlValue, titleValue) {
  var xhr = new XMLHttpRequest();
  // var postData = {
  //   "title": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  //   "href": "https://mapquest.com"
  // };

  var postData = {
      "title": titleValue.value,
      "href": urlValue.value
    };

  var jSONPostData = JSON.stringify(postData);
  console.log("Original post data:   " + jSONPostData);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success receviced data: " + result);
    }
  }
  xhr.open("POST", "https://time-radish.glitch.me/posts", true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(jSONPostData);
}