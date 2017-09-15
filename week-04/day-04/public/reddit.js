// var url = "https://time-radish.glitch.me/";
var url = "http://localhost:8080/";
window.addEventListener('load', init);

function init(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var result = JSON.parse(xhr.response);
      console.log(result.posts);
      var getPostDiv = document.getElementsByClassName("post")[0];
  
      for (let i = 0; i < result.posts.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "singlePost";
        getPostDiv.appendChild(newDiv);
        createId(i,result,newDiv);
        createArrowAndScore(i,result,newDiv);
        createTitleDateAuthorModifyAndRemovve(i,result,newDiv);
      }
    }
  }
  xhr.open("GET", url + "posts", true);
  xhr.send();
}

function createId(i,result,newDiv) {
  var newId = document.createElement("div");
  newId.innerHTML = result.posts[i].id;
  newId.id = "showId";
  newId.className = "column";
  newDiv.appendChild(newId);
}

function createArrowAndScore(i,result,newDiv){
  var newDivScore = document.createElement("div");
  newDivScore.id = "secondColumn";
  newDivScore.className = "column";
  newDiv.appendChild(newDivScore);

  createUpArrow(i,result,newDivScore);
  createScore(i,result,newDivScore);
  createDownArrow(i,result,newDivScore);
}

function createUpArrow(i,result,newDivScore){
  var newUpArrow = document.createElement("img");
  newUpArrow.id = "upArrow";
  if(result.posts[i].vote === 1){
    newUpArrow.src = './images/upvoted.png';
  }else {
  newUpArrow.src = "./images/upvote.png";
  }
  newUpArrow.addEventListener("click", function(){onUpVote(i,result,newUpArrow);});
  newDivScore.appendChild(newUpArrow);
}

function createScore(i,result,newDivScore) {
  var newScore = document.createElement("div");
  newScore.innerHTML = result.posts[i].score;
  newScore.id = "showScore";
  newDivScore.appendChild(newScore);
}

function createDownArrow(i,result,newDivScore){
  var newDownArrow = document.createElement("img");
  newDownArrow.id = "downArrow";
  if(result.posts[i].vote === -1){
    newDownArrow.src = "./images/downvoted.png";
  } else {
  newDownArrow.src = "./images/downvote.png";
  }
  newDownArrow.addEventListener("click", function(){onDownVote(i,result,newDownArrow);});
  newDivScore.appendChild(newDownArrow);
}

function onUpVote(i,result,newUpArrow){
  if(newUpArrow.src == "file:///C:/Users/Leo_Lam/Desktop/Leo_Lam-EPAM-JS/week-03/day-04/images/upvote.png"){
    newUpArrow.src = "./images/upvoted.png";
    var downArrowImage = document.getElementById("downArrow");
    downArrowImage.src = "./images/downvote.png";
  }
  var getId = result.posts[i].id;
  var getScore = result.posts[i].score;
  var xhr = new XMLHttpRequest();

  var putData = {
    "id": getId,
    "score":getScore 
  };
  // var jSONPutData = JSON.stringify(putData);
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success put add data: " + result);      
      location.reload();
    }
  }
  console.log("getIdis " + putData.id + " " + putData.score);
  xhr.open("PUT", url + "posts/" + getId + "/upvote/" + getScore, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
}

function onDownVote(i,result,newDownArrow){
  if(newDownArrow.src == "file:///C:/Users/Leo_Lam/Desktop/Leo_Lam-EPAM-JS/week-03/day-04/images/downvote.png"){
    newDownArrow.src = "./images/downvoted.png";
    var upArrowImage = document.getElementById("upArrow");
    upArrowImage.src = "./images/upvote.png";
  }
  var getId = result.posts[i].id;
  var getScore = result.posts[i].score;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success put down data: ");
      location.reload();
      // window.location.href = "./reddit.html";
    }
  }
  xhr.open("PUT", url + "posts/" + getId + "/downvote/" + getScore, true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
}

function createTitleDateAuthorModifyAndRemovve(i,result,newDiv){
  var newDivTitle = document.createElement("div");
  newDivTitle.id = "thirdColumn";
  newDivTitle.className = "column";
  newDiv.appendChild(newDivTitle);

  var newTitle = document.createElement("div");
  newTitle.id = "showTitle";
  newDivTitle.appendChild(newTitle);

  createTitleLink(i,result,newTitle);
  createTimeStamp(i,result,newDivTitle);
  createOwner(i,result,newDivTitle);
 
  var newBr = document.createElement("br");
  newDivTitle.appendChild(newBr);

  createModifty(i,result,newDivTitle);
  createRemove(i,result,newDivTitle);
}

function createTitleLink(i,result,newTitle) {
  var newTitleLink = document.createElement("a");
  newTitleLink.id = "showLink";
  newTitleLink.href = result.posts[i].href;
  newTitleLink.innerHTML =  result.posts[i].title;
  newTitle.appendChild(newTitleLink);
}

function createTimeStamp(i,result,newDivTitle) {
  var newTimeStamp = document.createElement("span");
  var timeResult = formatTime(result.posts[i].timestamp )
  newTimeStamp.innerHTML = "submitted " + timeResult;
  newTimeStamp.id = "showTimeStamp";
  newDivTitle.appendChild(newTimeStamp);
}

function formatTime(seconds) {
  var theSecond = parseInt(seconds);
  var theMinute = 0;
  var theHour = 0;
  if (theSecond > 60) {
    theMinute = parseInt(theSecond / 60);
    theSecond = parseInt(theSecond % 60);
    if (theMinute > 60) {
      theHour = parseInt(theMinute / 60);
      theMinute = parseInt(theMinute % 60);
    }
  }
  var result = "" + parseInt(theSecond) + " seconds ";
  if (theMinute > 0) {
    result = "" + parseInt(theMinute) + " minutes " + result;
  }
  if (theHour > 0) {
    result = "" + parseInt(theHour) + " hours " + result;
  }
  return result;
}



function createOwner(i,result,newDivTitle) {
  var newOwner = document.createElement("span");
  if (result.posts[i].owner === null) {
    result.posts[i].owner = " by anonymous";
  }
  newOwner.innerHTML = result.posts[i].owner;
  newOwner.id = "showOwner";
  newDivTitle.appendChild(newOwner);
}

function createModifty(i,result,newDivTitle) {
  var newModifty = document.createElement("a");
  newModifty.innerHTML = "Modify   ";
  newModifty.id = "showModify";

  newModifty.addEventListener("click", function(){ onModify(i,result);});
  newDivTitle.appendChild(newModifty);
}

function onModify(i,result) {
  localStorage.setItem("url", result.posts[i].href);
  localStorage.setItem("title", result.posts[i].title);
  localStorage.setItem("id", result.posts[i].id);
  window.location.href= "./modify.html";
}

function createRemove(i,result,newDivTitle) {
  var newRemove = document.createElement("a");
  newRemove.innerHTML = " Remove";
  newRemove.id = "showRemove";
  var deleteId = result.posts[i].id;
  newRemove.addEventListener("click", function(){onRemove(i,result);});
  newDivTitle.appendChild(newRemove);
}

function onRemove(i,result) {
  var deleteId = result.posts[i].id
  var xhr = new XMLHttpRequest();
        
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success removed data: " + result);
      location.reload();
    }
  }
  xhr.open("DELETE", url + "posts/" + deleteId, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
}



