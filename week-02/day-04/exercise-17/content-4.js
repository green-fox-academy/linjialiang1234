var li = document.querySelectorAll("li");
console.log(li);
var arr = ['apple', 'banana', 'cat', 'dog'];

for(var i = 0; i < li.length; i++){
  li[i].textContent = arr[i];
}