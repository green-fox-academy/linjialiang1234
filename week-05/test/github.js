'use strict'
var url = "https://github.com/";
// GET /repos/:owner/:repo
//https://api.github.com/repos/greenfox-academy/linjialiang1234/commits

//151c9ddd42be0d62891f785cc61745669742500f ;
//https://api.github.com/rate_limit
const OWNER = "linjialiang1234";
var repo = "";

var valueOfSeach = document.getElementsByClassName("search-bar")[0].value;
var searchButton = document.getElementsByClassName("search-button")[0];
searchButton.addEventListener("click", searchRepository);

var loginButton = document.getElementsByClassName("login-button")[0];
loginButton.addEventListener("click", onAuthentication);

function onAuthentication() {
  var userName = document.getElementsByClassName("user-name")[0].value;
  var passWord = document.getElementsByClassName("password")[0].value;

  const myHeaders = new Headers();
  myHeaders.append('Authorization', 'Basic 151c9ddd42be0d62891f785cc61745669742500f');

  const myInit = {
    method: 'GET',
    headers: myHeaders
  }
  fetch("https://api.github.com/rate_limit",myInit).then(function(response) {
    // console.log(response.json().then(function(body) {
    //   console.log(body);
    // }));

    response.json().then(function(body) {
     console.log(body.rate.limit);
    });
    // if(response.status === 404) {
    //   // alert("Not found");
    //   document.getElementsByClassName("search-bar")[0].setAttribute("placeholder", "Not Found");
    // } else {
    // console.log(response.headers);


    // response.json().then(function(data) {
    //   // messagesKeeper = data.messages;
    //   // loadPage(data.messages);
    //   console.log(data);
    //   displayInformation(data);
    //   displayCommitMessage(data);
    //   displayRecommended(data);
    //   //create 404 alert

    //   //display commit message

    // })


  // }

  })




}


function searchRepository(valueOfSeach){
  repo = valueOfSeach;
//"repos/" + OWNER + "/" + repo
  fetch("https://api.github.com/search/repositories?q=topic:epam-jsa").then(function(response) {
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
      displayCommitMessage(data);
      displayRecommended(data);
      //create 404 alert

      //display commit message

    })
  }

  })

}

function displayInformation(data) {
  document.getElementsByClassName("repository-name")[0].innerHTML = data.name;
  document.getElementsByClassName("repository-description")[0].innerHTML = data.description;
  document.getElementsByClassName("repository-last-commit")[0].innerHTML = "Last updated at " + data.created_at;

}

function displayCommitMessage(data) {
  var commitsContent = document.getElementsByClassName("commits-content")[0];
  for(var i = 0; i < data.length; i++) {
    var singleCommitMessage = document.createElement("div");
    singleCommitMessage.innerHTML = data[i].commit.message;
    commitsContent.appendChild(singleCommitMessage);
    var signleCommitterAndTime = document.createElement("div");
    signleCommitterAndTime.innerHTML = data[i].commit.committer.name + " at " + data[i].commit.committer.date;
    commitsContent.appendChild(signleCommitterAndTime);
  }
}

function displayRecommended(data) {
  console.log(data.items[0].name);
  var recommendedContent= document.getElementsByClassName("recommended-content")[0];
  for(var i = 0; i < data.items.length; i++){
  var singleName = document.createElement("a");
  singleName.innerHTML = data.items[i].name;
  singleName.className = data.items[i].name;
  singleName.addEventListener("click", function(){searchNameRepository(singleName.className)});
  recommendedContent.appendChild(singleName);
  
   }
}

function searchNameRepository(searchName) {
  // var searchName = data.items[i].name;
  var newSearchValue = document.getElementsByClassName(searchName);
  console.log(newSearchValue);
  searchRepository(newSearchValue);
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
