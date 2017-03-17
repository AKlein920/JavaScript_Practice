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
