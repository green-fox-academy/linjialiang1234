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

// var animal = new Animal();
// animal.eat();
// animal.eat();
// animal.drink();
// animal.drink();
// animal.play();
// console.log(animal.hunger_value);
// console.log(animal.thirst_value);

function Farm() {
  var pig = new Animal ();
  var cow = new Animal ();
  var chicken = new Animal ();
  this.slots = 5;
  this.breed = function() {
  }
}