'use strict'
var url = "https://github.com/";
// GET /repos/:owner/:repo
const OWNER = "linjialiang1234";
var repo = "";

var valueOfSeach = document.getElementsByClassName("search-bar")[0].value;
var searchButton = document.getElementsByClassName("search-button")[0];
searchButton.addEventListener("click", searchRepository);


function searchRepository(valueOfSeach){
  repo = valueOfSeach;
//"repos/" + OWNER + "/" + repo
  fetch("https://api.github.com/repos/linjialiang1234/test123").then(function(response) {
    console.log(response.status);
    if(response.status === 404) {
      // alert("Not found");
      document.getElementsByClassName("search-bar")[0].setAttribute("placeholder", "Not Found");
    } else {
    // console.log(response.headers);
    response.json().then(function(data) {
      // messagesKeeper = data.messages;
      // loadPage(data.messages);
      console.log(data);
      displayInformation(data);
     

      //create 404 alert
    })
  }

  })

}

function displayInformation(data) {
  document.getElementsByClassName("repository-name")[0].innerHTML = data.name;
  document.getElementsByClassName("repository-description")[0].innerHTML = data.description;
  document.getElementsByClassName("repository-last-commit")[0].innerHTML = data.created_at;

}

// init();
// function init() {
//   fetch(url + "repos/" + OWNER + "/repo").then(function(response) {
//     response.json().then(function(data) {
//       messagesKeeper = data.messages;
//       loadPage(data.messages);
//     })
//   })
//   var submit = document.getElementById('submit');
//   submit.addEventListener('click', postInfo);
// }

// function loadPage(data) {
//   container.innerHTML = '';
//   data.forEach(function(value) {
//     var message = document.createElement('span');
//     message.innerText = `${value.name} : ${value.message}`;
//     container.appendChild(message);
//   }, this);
//   container.scrollTop = container.scrollHeight;
// }
