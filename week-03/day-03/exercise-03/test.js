'use strict';
var url = 'https://wakeful-vision.glitch.me/api/messages';
var messagesKeeper;

var container = document.getElementById("container");
init();

function init() {
  fetch(url).then(function(response) {
    response.json().then(function(data) {
      messagesKeeper = data.messages;
      loadPage(data.messages);
    })
  })
  var submit = document.getElementById('submit');
  submit.addEventListener('click', postInfo);
  console.log("111");
}

function loadPage(data) {
  container.innerHTML = '';
  data.forEach(function(value) {
    var message = document.createElement('span');
    message.innerText = value.name + " : " + value.message;
    container.appendChild(message);
  }, this);
  // container.scrollTop = container.scrollHeight;
}

function postInfo() {
  var userName = document.getElementById('user-name').value.trim();
  var inputMsg = document.getElementById('input').value.trim();
  if(userName.length && inputMsg.length) {
    var request = {
      name: userName,
      message: inputMsg
    };

    fetch(url, {
      method: 'post',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(request)
    }).then(function (response) {
      messagesKeeper.push(request);
      document.getElementById('user-name').value = '';
      document.getElementById('input').value = '';
      loadPage(messagesKeeper);
    }).catch(function(err) {
      console.log(error);
      return;
    });
  } else {
    return;
  }
}

setInterval(init, 5000);