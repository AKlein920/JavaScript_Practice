var isIsogram = function(str) {
  var boolean = true;
  if (!str.length) {
    var boolean = true;
  }

  var sortedArr = str.toLowerCase().split('').sort();
  console.log(sortedArr);

  for (var i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] == sortedArr[i+1]) {
      console.log('has dups, not isogram');
      var boolean = false;
      break;
    } else {
      console.log('keep going');
    }
  }

  console.log(boolean);
  return boolean;
}
isIsogram('josh');
