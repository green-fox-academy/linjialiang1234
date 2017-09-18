var url = "http://localhost:8090/";
window.addEventListener('load', init);

function init(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var result = JSON.parse(xhr.response);
      console.log(result);
      var getTodoDiv = document.getElementsByClassName("todos")[0];
  
      for (let i = 0; i < result.todos.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "singleTodo";
        getTodoDiv.appendChild(newDiv);
        createASinglePost(i,result,newDiv);
        // createArrowAndScore(i,result,newDiv);
        // createTitleDateAuthorModifyAndRemovve(i,result,newDiv);
      }
    }
  }
  xhr.open("GET", url + "api/todos", true);
  xhr.send();
}

function createASinglePost(i,result,newDiv){
  var newDescription = document.createElement("div");
  // newDivScore.id = "secondColumn";
  newDescription.className = "description";
  newDescription.innerHTML = result.todos[i].description;
  newDiv.appendChild(newDescription);

  createComplete(i,result,newDiv);
  // createDelete(i,result,newDiv);
  // createDownArrow(i,result,newDivScore);
}

function createComplete(i,result,newDiv){
  var newComplete = document.createElement("button");
  newComplete.className = "complete";
  newComplete.innerHTML = "Complete";
  // if(result.posts[i].vote === 1){
  //   newUpArrow.src = './images/upvoted.png';
  // }else {
  // newUpArrow.src = "./images/upvote.png";
  // }
  newComplete.addEventListener("click", function(){onComplete(i,result);});
  newDiv.appendChild(newComplete);
}


function onComplete(i,result){
  // if(newUpArrow.src == "file:///C:/Users/Leo_Lam/Desktop/Leo_Lam-EPAM-JS/week-03/day-04/images/upvote.png"){
  //   newUpArrow.src = "./images/upvoted.png";
  //   var downArrowImage = document.getElementById("downArrow");
  //   downArrowImage.src = "./images/downvote.png";
  // }
  var getId = result.todos[i]._id;
  var getDescription = result.todos[i].description;
  var getState = result.todos[i].state;
  var xhr = new XMLHttpRequest();

  var putData = {
    "id": getId,
    // "score":getScore 
  };
  // var jSONPutData = JSON.stringify(putData);
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success put add data: " + result);      
      location.reload();
    }
  }
  // console.log("getIdis " + putData.id + " " + putData.score);
  // xhr.open("PUT", url + "posts/" + getId + "/upvote/" + getScore, true);
  xhr.open("PUT", url + "api/todos/" + getId , true);
  
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
}

