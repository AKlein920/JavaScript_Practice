// Write a function insertDash that accepts a number as a parameter and returns the parameter with a dash inserted between any consecutive odd numbers.

// => 4547-9-3

// var str = 454793;


// insertDash(55555577);

var insertDash = function(str) {
  var array = str.toString().split('');
  for (var i = 0; i < array.length; i++) {
    if ((array[i] % 2 !==0) && (i == (array.length-1))) {
      console.log('this is the last number');
    } else if (array[i] % 2 !==0 && array[i+1] % 2 !== 0) {
      array[i] = array[i].concat('-');
    } else {
      console.log('these 2 consecutive numbers are even');
    }
  }
  var myStr = array.join('').replace(',', '');
  console.log(myStr);
}
var trial = '2804504938495877';
console.log(trial.length);
insertDash(2804504938495877);
