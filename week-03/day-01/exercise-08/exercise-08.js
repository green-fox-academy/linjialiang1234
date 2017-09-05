function Animal() {
  this.hunger_value = 50;
  this.thirst_value = 50;
  this.eat = function() {
    this.hunger_value -= 1;
  };
  this.drink = function() {
    this.thirst_value -= 1;
  };
  this.play = function() {
    this.hunger_value -= 1;
    this.thirst_value -= 1;
  }
}

// var abc = new Animal();
// abc.eat();
// abc.eat();
// abc.drink();
// abc.drink();
// abc.play();
// console.log("123" + abc.hunger_value);
// console.log("123" + abc.thirst_value);

function Farm() {
  var pig = new Animal ();
  var cow = new Animal ();
  var chicken = new Animal ();
  this.slots = 5;
  this.breed = function() {

  }
}