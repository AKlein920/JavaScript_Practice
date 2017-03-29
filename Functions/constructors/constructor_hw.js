// Create a constructor function for a Pet
// public attributes
// owner - string
// name - string
// constructor function takes the pets name as a parameter and sets the public attribute
var Pet = function(name) {
  this.owner = 'Abi';
  this.name = name;
};
var pet1 = new Pet('Cracker');
// console.log(pet1);

// Create a constructor function for a Dog
// this should inherit from Pet
// private attributes
// price - 20
// public methods
// bark() - log "bark"
// chaseTail() - log "oh boy oh boy oh boy"
// getPrice() - return price

var Dog = function(name) {
  Pet.call(this, name);
  var price = 20;
  this.bark = function() {
    console.log('bark!');
  };
  this.chaseTail = function() {
    console.log('oh boy oh boy oh boy!');
  };
  this.getPrice = function() {
    // console.log("dog costs: " + price);
    return price;
  };
};
var dog1 = new Dog('Fido');
// dog1.getPrice();

// Create a constructor function for a Cat
// this should inherit from Pet
// private attributes
// price - 10
// public methods
// purr() - log "purrrrr"
// clean() - log "cleaning"
// getPrice() - return price

var Cat = function(name) {
  Pet.call(this, name);
  var price = 10;
  this.purr = function() {
    console.log('purrrr');
  };
  this.clean = function() {
    console.log('cleaning');
  };
  this.getPrice = function() {
    // console.log(name + ' the cat costs: ' + price);
    return price;
  };
};
var cat1 = new Cat('Sassy');
// cat1.getPrice();

// Create a constructor function for a Person
// private attributes:
// name - set name from parameter in constructor method
// age - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// pets - empty array initially
// bankAccount - initially set to 0
// public methods:
// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// age() - increment age, increment height, increment weight, decrement mood, increment bank acount by 10 (birthday money)
// buyPet(pet) - push the Pet object onto the pets array, increment mood by 10, decrement bankAccount by the value of the pet (hint: getPrice())

var Person = function(name) {
  var name = name;
  var age = 0;
  var weight = 0;
  var mood = 0;
  var pets = [];
  var bankAccount = 0;
  this.getName = function() {
    // console.log('My name is ' + name);
    return name;
  };
  this.getAge = function() {
    // console.log("I am " + age + " years old");
    return age;
  };
  this.getWeight = function() {
    // console.log("I weigh " + weight + " pounds");
    return weight;
  };
  this.greet = function() {
    console.log("Hi! My name is " + name);
  };
  this.eat = function() {
    weight++;
    mood++;
    // console.log('Yum. Now I weigh ' + weight + ' and my mood is ' + mood);
  };
  this.exercise = function() {
    weight--;
    // console.log('Great workout! Now I weigh: ' + weight);
  };
  this.age = function() {
    age++;
    weight++;
    mood--;
    bankAccount +=10;
  };
  this.buyPet = function(pet) {
    // console.log('bank account before pet: ' + bankAccount);
    pets.push(pet);
    mood += 10;
    bankAccount -= pet.getPrice();
    // console.log('bank account AFTER pet: ' + bankAccount);
  };
};

// Instantiate a new Person named Timmy
var timmy = new Person('Timmy');
// console.log(timmy);

// Age Timmy five years
timmy.age();
timmy.age();
timmy.age();
timmy.age();
timmy.age();
// console.log(timmy.getAge());

// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();

// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();

// Age Timmy 9 years
timmy.age();
timmy.age();
timmy.age();
timmy.age();
timmy.age();
timmy.age();
timmy.age();
timmy.age();
timmy.age();
// console.log(timmy.getAge());

// Create a dog named "Lassie"
var lassie = new Dog('Lassie');
lassie.owner = 'Timmy';
// console.log(lassie);

// Have Timmy "buy" Lassie
timmy.buyPet(lassie);

// Age Timmy 9 years
timmy.age();
timmy.age();
timmy.age();
timmy.age();
timmy.age();
timmy.age();
timmy.age();
timmy.age();
timmy.age();
// console.log(timmy.getAge());

// Create a cat named "Scratchy"
// Set Scratchy's owner to the string "Timmy"
var scratchy = new Cat("Scratchy");
scratchy.owner = "Timmy";

// Have Timmy "buy" Scratchy
timmy.buyPet(scratchy);

// Have Timmy eat twice
timmy.eat();
timmy.eat();

// Have Timmy exercise twice
timmy.exercise();
timmy.exercise();

/////////////////////////////////// FACTORIES
// Create a single factory object to generate shoes
// The factory should have an array of shoes that it has generated
// A shoe should have a serial number, based on what index it is in the factory's shoes array

var Shoe = function(type, serialNumber) {
  this.type = type;
  this.serialNumber = serialNumber;
}

var shoeFactory = {
  shoes: [],
  generateShoePair: function(type) {
    var newPair = new Shoe(type, this.shoes.length);
    this.shoes.push(newPair);
    return newPair;
  },
  findPair: function(index) {
    return this.shoes[index];
  }
};

shoeFactory.generateShoePair('high heels');
shoeFactory.generateShoePair('running shoes');
// console.log(shoeFactory.shoes);
// console.log(shoeFactory.findPair(1));

// Create a constructor function for coat factories
// A factory should have a name attribute which is set by passing a parameter into the constructor function for the factory
// A factory should have an array of coats that it has generated
// A coat should have a serial number attribute, based on what index it is in the factory's coat array
// A coat should have a maker name attribute, which the factory sets during generation
var Coat = function(maker, serialNumber) {
  this.serialNumber = serialNumber;
  this.maker = maker;
};

var coatFactory = function(name) {
  this.name = name;
  this.coats = [];
  this.generateCoats = function() {
    var newCoat = new Coat(name, this.coats.length);
    this.coats.push(newCoat);
    return newCoat;
  };
  this.findCoat = function(index) {
    return this.coats[index];
  }
};

var burlington = new coatFactory('Burlington');
burlington.generateCoats();
burlington.generateCoats();
burlington.generateCoats();
// console.log(burlington.coats);
// console.log(burlington.findCoat(2));

// Create a constructor function for computer factories
// A factory should have a name attribute which is set by passing a parameter into the constructor function for the factory
// A factory should have an array of computers that it has generated
// A computer should have a serial number attribute, based on what index it is in the factory's computers array
// A computer should have a maker name attribute, which the factory sets during generation
var Computer = function(maker, serialNumber) {
  this.maker = maker;
  this.serialNumber = serialNumber;
};

var computerFactory = function(name) {
  this.name = name;
  this.computers = [];
  this.generateComputers = function() {
    var newComp = new Computer(name, this.computers.length);
    this.computers.push(newComp);
    return newComp;
  };
  this.findComp = function(index) {
    return this.computers[index];
  };
};

var apple = new computerFactory('apple');
apple.generateComputers();
apple.generateComputers();
apple.generateComputers();
console.log(apple.findComp(1));

//////////////////////////////// INHERITANCE PRACTICE
var Person = function(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
  this.greet = function() {
    console.log('Hi! My name is ' + name + ', I am ' + age + ' years old, and I am a ' + profession);
  }
}
var abi = new Person('Abi', 27, "developer");
abi.greet();

var Baby = function(name, age) {
  Person.call(this, name, age);
  this.profession = 'I am too young to work, silly!';
  this.greet = function() {
    console.log('squakkkk I can\'t talk yet');
  }
};

var ooshling = new Baby('ooshling', 1);
// console.log(ooshling);
ooshling.greet();
