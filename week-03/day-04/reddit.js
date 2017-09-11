window.addEventListener('load', init);

function init(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.response);
      console.log(result.posts);
      var getPostDiv = document.getElementsByClassName("post");
  
      for (let i = 0; i < result.posts.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "singlePost";
        getPostDiv[0].appendChild(newDiv);
        var newDivInner = newDiv;
        createId(i,result,newDiv);
        createArrowAndScore(i,result,newDiv);
        createTitleDateAuthorModifyAndRemovve(i,result,newDiv);
      }
    }
  }
  xhr.open("GET", "https://time-radish.glitch.me/posts", true);
  xhr.send();
}

function createId(i,result,newDiv) {
  var newId = document.createElement("div");
  newId.innerHTML = result.posts[i].id;
  newId.id = "showId";
  newId.className = "colum";
  newDiv.appendChild(newId);
}

function createArrowAndScore(i,result,newDiv){
  var newDivScore = document.createElement("div");
  newDivScore.id = "secondColum";
  newDivScore.className = "colum";
  newDiv.appendChild(newDivScore);

  var newUpArrow = document.createElement("img");
  newUpArrow.src = "./images/upvote.png";
  newUpArrow.addEventListener("click", function(){onUpVote(i,result,newUpArrow);});
  newDivScore.appendChild(newUpArrow);

  var newScore = document.createElement("div");
  newScore.innerHTML = result.posts[i].score;
  newScore.id = "showScore";
  newDivScore.appendChild(newScore);

  var newDownArrow = document.createElement("img");
  newDownArrow.src = "./images/downvote.png";
  newDownArrow.addEventListener("click", function(){onDownVote(i,result,newDownArrow);});
  newDivScore.appendChild(newDownArrow);
}

function onUpVote(i,result,newUpArrow){
  if(newUpArrow.src == "file:///C:/Users/Leo_Lam/Desktop/Leo_Lam-EPAM-JS/week-03/day-04/images/upvote.png"){
    newUpArrow.src = "./images/upvoted.png";
    newDownArrow.src = "./images/downvote.png";
  }
  console.log("up id  " + result.posts[i].id);
  console.log("up score" + result.posts[i].score);
  var getId = result.posts[i].id;
  var getScore = result.posts[i].score;
  console.log("getscore +1 : " + getScore);
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success put add data: " + result);      
      location.reload();
    }
  }
  xhr.open("PUT", "https://time-radish.glitch.me/posts/"+getId+"/upvote", true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
}

function onDownVote(i,result,newDownArrow){
  if(newDownArrow.src == "file:///C:/Users/Leo_Lam/Desktop/Leo_Lam-EPAM-JS/week-03/day-04/images/downvote.png"){
    newDownArrow.src = "./images/downvoted.png";
    newUpArrow.src = "./images/upvote.png";
  }
  var getId = result.posts[i].id;
  var getScore = result.posts[i].score;
  console.log("getscore -1 : " + getScore);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success put down data: " + result);
      location.reload();
    }
  }
  xhr.open("PUT", "https://time-radish.glitch.me/posts/"+getId+"/downvote", true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
}

function createTitleDateAuthorModifyAndRemovve(i,result,newDiv){
  var newDivTitle = document.createElement("div");
  newDivTitle.id = "thirdColum";
  newDivTitle.className = "colum";
  newDiv.appendChild(newDivTitle);

  var newTitle = document.createElement("div");
  newTitle.id = "showTitle";
  newDivTitle.appendChild(newTitle);

  var newTitleLink = document.createElement("a");
  newTitleLink.id = "showLink";
  newTitleLink.href = result.posts[i].href;
  newTitleLink.innerHTML =  result.posts[i].title;
  newTitle.appendChild(newTitleLink);
  
  var newTimeStamp = document.createElement("span");
  var timeResult = formatTime(result.posts[i].timestamp )
  newTimeStamp.innerHTML = "submitted " + timeResult;
  newTimeStamp.id = "showTimeStamp";
  newDivTitle.appendChild(newTimeStamp);

  var newOwner = document.createElement("span");
  if (result.posts[i].owner === null) {
    result.posts[i].owner = " by anonymous";
  }
  newOwner.innerHTML = result.posts[i].owner;
  newOwner.id = "showOwner";
  newDivTitle.appendChild(newOwner);

  var newBr = document.createElement("br");
  newDivTitle.appendChild(newBr);

  var newModifty = document.createElement("a");
  newModifty.innerHTML = "Modify   ";
  newModifty.id = "showModify";

  newModifty.addEventListener("click", function(){ onModify(i,result);});
  newDivTitle.appendChild(newModifty);

  var newRemove = document.createElement("a");
  newRemove.innerHTML = "   Remove";
  newRemove.id = "showRemovev";
  var deleteId = result.posts[i].id;
  newRemove.addEventListener("click", function(){onRemove(i,result);});
  newDivTitle.appendChild(newRemove);
}

function onModify(i,result){
  localStorage.setItem("url", result.posts[i].href);
  localStorage.setItem("title", result.posts[i].title);
  localStorage.setItem("id", result.posts[i].id);
  window.location.href= "./modify.html";
}

function onRemove(i,result) {
  var deleteId = result.posts[i].id
  var xhr = new XMLHttpRequest();
        
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success removed data: " + result);
      location.reload();
    }
  }
  xhr.open("DELETE", "https://time-radish.glitch.me/posts/"+deleteId, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
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


