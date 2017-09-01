var pClass = document.querySelectorAll("p");
for(var i = 0; i < pClass.length; i++){
  if(pClass[i].classList.contains("cat")){
    alert("YEAH CAT");
  }

  if(pClass[3].classList.contains("dolphine")){
    pClass[0].innerHTML = "peer";
  }

  if(pClass[0].classList.contains("apple")){
    pClass[2].innerHTML = "dog";
  }

  pClass[0].setAttribute("class","red");
  pClass[1].setAttribute("style","border-radius:30%");
}