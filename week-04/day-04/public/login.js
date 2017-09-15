var url = "http://localhost:8080/";
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function () {
  checkInputEmpty();
});

function checkInputEmpty() {
   var ownerValue = document.getElementById("ownerInput");
  // var titleValue = document.getElementById("titleInput");
  // if (urlValue.value === "") {
  //   alert("Please input the URL!");
  //   return;
  // }
  // if (titleValue.value === "") {
  //   alert("Please input the title!");
  //   return;
  // }
  postData(ownerValue);
}

function postData(ownerValue) {
  var xhr = new XMLHttpRequest();
  var postData = {
      "owner": ownerValue.value
      // "href": urlValue.value
  };
  var jSONPostData = JSON.stringify(postData);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText);
       localStorage.setItem("loginName",result[0].owner);
       console.log("success receviced login id data: " + result[0].owner);
       

      // window.history.back();
      window.location.href = "./reddit.html";
      
    }
  }
  xhr.open("POST", url + "login", true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(jSONPostData);
}