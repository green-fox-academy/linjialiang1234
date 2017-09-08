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

      //first colum
      createFirstColum(i);
    
      //second colum
      createSecondColum(i);

      //third colum
      createThirdColum(i);

      // var newHref = document.createElement("div");
      // newHref.innerHTML = result.posts[i].href;
      // newHref.id = "showHref";
    }

    function createFirstColum(i){
      var newId = document.createElement("div");
      newId.innerHTML = result.posts[i].id;
      newId.id = "showId";
      newId.className = "colum";
      newDiv.appendChild(newId);

    }

    function createSecondColum(i){
      var newDivScore = document.createElement("div");
      newDivScore.id = "secondColum";
      newDivScore.className = "colum";
      newDiv.appendChild(newDivScore);

      var newUpArrow = document.createElement("img");
      newUpArrow.src = "./images/upvote.png";
      newUpArrow.addEventListener("click", function(){
        console.log(newUpArrow.src);
        console.log(newDownArrow.src);
        if(newUpArrow.src == "file:///C:/Users/Leo_Lam/Desktop/Leo_Lam-EPAM-JS/week-03/day-04/images/upvote.png"){
          console.log("inner" + newUpArrow.src);
          
          newUpArrow.src = "./images/upvoted.png";
          newDownArrow.src = "./images/downvote.png";
        }
      
         console.log("up id  " + result.posts[i].id);
        console.log("up score" + result.posts[i].score);
         var getId = result.posts[i].id;
         var getScore = result.posts[i].score;
          getScore += 1;
          console.log("getscore +1 : " + getScore);
         var xhr = new XMLHttpRequest();
        
         
           xhr.onreadystatechange = function () {
             if (xhr.readyState == 4 && xhr.status == 200) {
               var result = JSON.parse(xhr.responseText);
               console.log("success put add data: " + result);
             }
           }
           xhr.open("PUT", "https://time-radish.glitch.me/posts/"+getId+"/upvote", true);
           xhr.setRequestHeader("Accept", "application/json");
           xhr.send();

      });


      newDivScore.appendChild(newUpArrow);
      var newScore = document.createElement("div");
      newScore.innerHTML = result.posts[i].score;
      newScore.id = "showScore";
      newDivScore.appendChild(newScore);
      var newDownArrow = document.createElement("img");
      newDownArrow.src = "./images/downvote.png";

      newDownArrow.addEventListener("click", function(){
        if(newDownArrow.src == "file:///C:/Users/Leo_Lam/Desktop/Leo_Lam-EPAM-JS/week-03/day-04/images/downvote.png"){
          console.log("inner" + newUpArrow.src);
          
          newDownArrow.src = "./images/downvoted.png";
          newUpArrow.src = "./images/upvote.png";
         }

         console.log("dddd id  " + result.posts[i].id);
         console.log("dddd score" + result.posts[i].score);
          var getId = result.posts[i].id;
          var getScore = result.posts[i].score;
           getScore -= 1;
           console.log("getscore -1 : " + getScore);
          var xhr = new XMLHttpRequest();
         
          
            xhr.onreadystatechange = function () {
              if (xhr.readyState == 4 && xhr.status == 200) {
                var result = JSON.parse(xhr.responseText);
                console.log("success put down data: " + result);
              }
            }
            xhr.open("PUT", "https://time-radish.glitch.me/posts/"+getId+"/downvote", true);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.send();


      });
      newDivScore.appendChild(newDownArrow);
      }

  function createThirdColum(i){
        var newDivTitle = document.createElement("div");
        newDivTitle.id = "thirdColum";
        newDivTitle.className = "colum";
        newDiv.appendChild(newDivTitle);
  
        var newTitle = document.createElement("div");
        newTitle.innerHTML = result.posts[i].title;
        newTitle.id = "showTitle";
        newDivTitle.appendChild(newTitle);
  
  
        var newTimeStamp = document.createElement("div");
        var newDate = new Date();
        newDate.setTime(result.posts[i].timestamp * 1000);
  
        newTimeStamp.innerHTML = newDate.toDateString();
        newTimeStamp.id = "showTimeStamp";
        newDivTitle.appendChild(newTimeStamp);
  
  
        var newOwner = document.createElement("div");
        if (result.posts[i].owner === null) {
          result.posts[i].owner = "anonymous";
        }
  
        newOwner.innerHTML = result.posts[i].owner;
        newOwner.id = "showOwner";
        newDivTitle.appendChild(newOwner);
  
        var newModifty = document.createElement("a");
        newModifty.innerHTML = "Modify";
        newModifty.id = "showModify";
        newDivTitle.appendChild(newModifty);
  
        var newRemove = document.createElement("a");
        newRemove.innerHTML = "Remove";
        newRemove.id = "showRemovev";

        var deleteId = result.posts[i].id;
        
        newRemove.addEventListener("click", function removePost(){
          console.log("dddd" + result.posts[i].id);
          var deleteId = result.posts[i].id

          
              var xhr = new XMLHttpRequest();
              
              
              xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                  var result = JSON.parse(xhr.responseText);
                  console.log("success removed data: " + result);
                }
              }
              xhr.open("DELETE", "https://time-radish.glitch.me/posts/"+deleteId, true);
              // xhr.setRequestHeader("Accept", "application/json");
              xhr.setRequestHeader("Content-type", "application/json");
              xhr.send();
        });
        newDivTitle.appendChild(newRemove);
      }



  }

  // function removePost(deleteId){
    
  //   // var getDeleteId = this.getElementsByClassName("colum");
  //   // var deleteNumber = getDeleteId[0].innerHTML;

  

  // }

}

xhr.open("GET", "https://time-radish.glitch.me/posts", true);
xhr.send();