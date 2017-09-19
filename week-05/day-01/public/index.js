var url = "http://localhost:8090/";
window.addEventListener('load', init);

function init(){
  
  var submitButton = document.getElementById("submitButton");
  var submitValue = document.getElementById("ownerInput");
  submitButton.addEventListener("click", function () {
    onSumbit(submitValue);
  });

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
        createASingleTodo(i,result,newDiv);
      }
    }
  }
  xhr.open("GET", url + "api/todos", true);
  xhr.send();
}

function onSumbit(submitValue) {
  var xhr = new XMLHttpRequest();
  let postTodo = {
      "description": submitValue.value
  };
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success receviced data: " + result);
      location.reload();
      
    }
  }
  xhr.open("POST", url + "api/todos", true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(postTodo));
}

function createASingleTodo(i,result,newDiv){
  var newDescription = document.createElement("div");
  newDescription.className = "description";
  newDescription.innerHTML = result.todos[i].description;
  if(result.todos[i].state === 1) {
    newDescription.style.textDecoration = "line-through";
  }
  newDiv.appendChild(newDescription);

  createComplete(i,result,newDiv);
  createDelete(i,result,newDiv);
}

function createComplete(i,result,newDiv){
  var newComplete = document.createElement("button");
  newComplete.className = "complete";
  newComplete.innerHTML = "Complete";
  newComplete.addEventListener("click", function(){onComplete(i,result);});
  newDiv.appendChild(newComplete);
}


function onComplete(i,result){
  var getId = result.todos[i]._id;
  var getDescription = result.todos[i].description;
  var getState = result.todos[i].state;
  var xhr = new XMLHttpRequest();

  var putData = {
    "id": getId
  };
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success put add data: " + result);      
      location.reload();
    }
  }

  xhr.open("PUT", url + "api/todos/" + getId , true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
}


function createDelete(i,result,newDiv){
  var newDelete = document.createElement("button");
  newDelete.className = "delete";
  newDelete.innerHTML = "Delete";
  newDelete.addEventListener("click", function(){onDelete(i,result);});
  newDiv.appendChild(newDelete);
}

function onDelete(i,result){
  var getId = result.todos[i]._id;
  var getDescription = result.todos[i].description;
  var getState = result.todos[i].state;
  var xhr = new XMLHttpRequest();

  var putData = {
    "id": getId
  };
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText);
      console.log("success delete data: " + result);      
      location.reload();
    }
  }
 
  xhr.open("DELETE", url + "api/todos/" + getId , true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
}



