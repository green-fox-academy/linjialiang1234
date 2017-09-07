var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {

    var result = JSON.parse(xhr.response);
    console.log(result.posts);

     var getPostDiv = document.getElementsByClassName("post");

    // var showId = document.getElementById("showId");
    // var showTitle = document.getElementById("showTitle");
    // var showHref = document.getElementById("showHref");
    // var showScore = document.getElementById("showScore");
    

    
    for(var i = 0; i < result.posts.length; i++ ) {

        var newDiv = document.createElement("div");
        newDiv.className = "singlePost";
        getPostDiv[0].appendChild(newDiv);
        var newDivInner = newDiv;
        

        //first colum
        var newId = document.createElement("div");
        newId.innerHTML = result.posts[i].id;
        newId.id = "showId";
        newId.className = "colum";
        newDiv.appendChild(newId);
        

        //second colum
        var newDivScore = document.createElement("div");
        newDivScore.id = "secondColum";
        newDivScore.className = "colum";
        newDiv.appendChild(newDivScore);

        var newUpArrow = document.createElement("img");
        newUpArrow.src = "./images/upvote.png";
        newDivScore.appendChild(newUpArrow);
        var newScore = document.createElement("div");
        newScore.innerHTML = result.posts[i].score;
        newScore.id = "showScore";
        newDivScore.appendChild(newScore);
        var newDownArrow = document.createElement("img");
        newDownArrow.src = "./images/downvote.png";
        newDivScore.appendChild(newDownArrow);
        

        //third colum
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
       
        newTimeStamp.innerHTML =  newDate.toDateString();
        newTimeStamp.id = "showTimeStamp";
        newDivTitle.appendChild(newTimeStamp);


        var newOwner = document.createElement("div");
        if(result.posts[i].owner === null){
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
        newDivTitle.appendChild(newRemove);




        var newHref = document.createElement("div");
        newHref.innerHTML = result.posts[i].href;
        newHref.id = "showHref";
        
        
       



        // newDiv.appendChild(newTitle);
        // newDiv.appendChild(newHref);
        // newDiv.appendChild(newTimeStamp);
        // newDiv.appendChild(newOwner);
        


        
        
        // showId.innerHTML = result.posts[i].id;

    }

  }

}

xhr.open("GET", "https://time-radish.glitch.me/posts", true);
xhr.send();
