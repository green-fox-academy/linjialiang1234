'use strict'
const url = "https://api.github.com/";
// GET /repos/:owner/:repo
//https://api.github.com/repos/greenfox-academy/linjialiang1234/commits

//151c9ddd42be0d62891f785cc61745669742500f ;
//https://api.github.com/rate_limit

//"https://api.github.com/search/repositories?q=topic:epam-jsa"
const OWNER = "linjialiang1234";
var repo = "";
window.addEventListener('load', init);
//init go button, login button and recommend list
function init() {
  //initial serach button
  var searchButton = document.getElementsByClassName("search-button")[0];
  searchButton.addEventListener("click", searchRepository);

  //initial login button
  var loginButton = document.getElementsByClassName("login-button")[0];
  loginButton.addEventListener("click", onAuthentication);

  //initial recommended list
  displayRecommended();
}

function displayRecommended() {
  var token = localStorage.getItem("token");
  console.log("token; " + token);
  const myHeaders = new Headers();
  var myInit = {};
  if(token !== null) {
    myHeaders.append('Authorization', 'Basic ' + token);
     myInit = {
      method: 'GET',
      headers: myHeaders
    }
  } else {
     myInit = {method: 'GET'};
  }
  
  fetch("https://api.github.com/search/repositories?q=topic:epam-jsa", myInit).then(function (response) {
    console.log(response.status);
    if (response.status === 404) {
      document.getElementsByClassName("search-bar")[0].setAttribute("placeholder", "Not Found");
    } else {
      // console.log(response.headers);
      response.json().then(function (data) {
        console.log(data);
        displaySingleRecommended(data);
      })
    }
  })
}

function displaySingleRecommended(data) {
  var recommendedContent = document.getElementsByClassName("recommended-content")[0];
  for (let i = 0; i < data.items.length; i++) {
    var singleName = document.createElement("a");
    singleName.innerHTML = data.items[i].name;
    singleName.className = data.items[i].name;

    var newSearchName =singleName.className
    // singleName.style.margin = "2% 0 0 0";
    singleName.addEventListener("click", function (event) {
      searchNameRepository(this.className)
    });
    recommendedContent.appendChild(singleName);
  }
}

function searchNameRepository(newSearchName) {
  console.log("searchName:" + newSearchName);
  searchAnotherRepository(newSearchName);

  

  // var newSearchValue = document.getElementsByClassName(searchName);
  // console.log("123: " + newSearchValue);
  // searchRepository(newSearchValue);
}

function searchAnotherRepository(newSearchName) {
  var valueOfSeach = newSearchName;
  repo = valueOfSeach;

  var token = localStorage.getItem("token");
  console.log("token; " + token);
  const myHeaders = new Headers();
  var myInit = {};
  if(token !== null) {
    myHeaders.append('Authorization', 'Basic ' + token);
  
     myInit = {
      method: 'GET',
      headers: myHeaders
    }
  } else {
     myInit = {method: 'GET'};
  }
  
  //"repos/" + OWNER + "/" + repo
  console.log("repo: " + repo);
  fetch(url + "repos/greenfox-academy/" + valueOfSeach, myInit).then(function (response) {
    console.log(response.status);
    if (response.status === 404) {
      // alert("Not found");
      document.getElementsByClassName("search-bar")[0].setAttribute("placeholder", "Not Found");
    } else {
      // console.log(response.headers);
      response.json().then(function (data) {
       
        console.log(data);
        displayInformation(data);
        displayCommitMessage(data,valueOfSeach);
      })
    }

  })
}



function searchRepository() {
  var valueOfSeach = document.getElementsByClassName("search-bar")[0].value;
  repo = valueOfSeach;
  //"repos/" + OWNER + "/" + repo

  var token = localStorage.getItem("token");
  console.log("token; " + token);
  const myHeaders = new Headers();
  var myInit = {};
  if(token !== null) {
    myHeaders.append('Authorization', 'Basic ' + token);
  
     myInit = {
      method: 'GET',
      headers: myHeaders
    }
  } else {
     myInit = {method: 'GET'};
  }
  
  console.log("repo: " + repo);
  fetch(url + "repos/greenfox-academy/" + repo, myInit).then(function (response) {
    console.log(response.status);
    if (response.status === 404) {
      alert("Not found");
      document.getElementsByClassName("search-bar")[0].setAttribute("placeholder", "Not Found");
    } else {
      // console.log(response.headers);
      response.json().then(function (data) {
       
        console.log(data);
        displayInformation(data);
        displayCommitMessage(data,valueOfSeach);
      })
    }

  })
}

function onAuthentication() {
  var userName = document.getElementsByClassName("user-name")[0].value;
  var token = document.getElementsByClassName("password")[0].value;

  // token = "151c9ddd42be0d62891f785cc61745669742500f";

  localStorage.setItem('user-name', userName);
  localStorage.setItem('token', token);
  
  const myHeaders = new Headers();
  myHeaders.append('Authorization', 'Basic ' + token);

  const myInit = {
    method: 'GET',
    headers: myHeaders
  }
  fetch("https://api.github.com/rate_limit", myInit).then(function (response) {

    if (response.status !== 200) {
        alert("not a token");
    } else {

      document.getElementsByClassName("user-name")[0].value = "";
      document.getElementsByClassName("password")[0].value = "";

    response.json().then(function (body) {
      console.log(body);
      console.log(body.rate.limit);
    });

  }


  })
}

function displayInformation(data) {
  document.getElementsByClassName("repository-name")[0].innerHTML = data.name;
  document.getElementsByClassName("repository-description")[0].innerHTML = data.description;
  document.getElementsByClassName("repository-last-commit")[0].innerHTML = "Last updated at " + data.created_at;
}

function displayCommitMessage(data,valueOfSeach) {
  var myNode = document.getElementsByClassName("commits-content")[0];
  myNode.innerHTML = '';

  var token = localStorage.getItem("token");
  console.log("token; " + token);
  const myHeaders = new Headers();
  var myInit = {};
  if(token !== null) {
    myHeaders.append('Authorization', 'Basic ' + token);
  
     myInit = {
      method: 'GET',
      headers: myHeaders
    }
  } else {
     myInit = {method: 'GET'};
  }
  
  
  fetch("https://api.github.com/repos/greenfox-academy/" + valueOfSeach + "/commits", myInit).then(function (response) {
    response.json().then(function (data) {
      var commmitLength = data.length;
      document.getElementsByClassName("commits-number")[0].innerHTML = " (" + commmitLength + ")";
      
       console.log("commit message: " +data);
       var commitsContent = document.getElementsByClassName("commits-content")[0];
       for (var i = 0; i < data.length; i++) {
         var singleCommitMessage = document.createElement("div");
         singleCommitMessage.innerHTML = data[i].commit.message;
         console.log("count: " + data.length);
         singleCommitMessage.style.fontWeight = "bold";
         commitsContent.appendChild(singleCommitMessage);
         var signleCommitterAndTime = document.createElement("div");
         signleCommitterAndTime.innerHTML = data[i].commit.committer.name + " at " + data[i].commit.committer.date;
         signleCommitterAndTime.style.color = "#597968"
         signleCommitterAndTime.style.fontStyle = "italic";
         signleCommitterAndTime.className = "single-committer-and-time";
         
         commitsContent.appendChild(signleCommitterAndTime);
       }
       // displayInformation(data);
      //  displayCommitMessage(data);
     })
  
  
  })


}