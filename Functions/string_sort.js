// Create working code to sort following strings: kavxpfequl, ynsxcrxout, jrhmnjyvpb, kefrxznjsn, juaypzwoow, kaszncrqdc, tlvszaghul, owfjrozmdf, qcwhbmviaj, dakguurrhi. Do not use built-in functions, create your own. Make sure that your code is fast. Use any programming language.

var stringsArray = ['kavxpfequl', 'ynsxcrxout', 'jrhmnjyvpb', 'kefrxznjsn', 'juaypzwoow', 'kaszncrqdc', 'tlvszaghul', 'owfjrozmdf', 'qcwhbmviaj', 'dakguurrhi'];

// var stringsArray1 = ['kavxpfequl', 'ynsxcrxout', 'jrhmnjyvpb', 'kefrxznjsn', 'juaypzwoow', 'kaszncrqdc', 'tlvszaghul', 'owfjrozmdf', 'qcwhbmviaj', 'dakguurrhiiiiii', 'ja', 'za', 'zaddy', 'tlv', 'kazxpfequl'];



// console.log(checkLengths(stringsArray1));

var sortStrings = function(strings) {
  var swap = true;
  while (swap) {
    swap = false;
    var temp = null;
    for (var i = 0; i < strings.length-1; i++) {
      if (strings[i] > strings[i+1]) {
        temp = strings[i];
        strings[i] = strings[i+1];
        strings[i+1] = temp;
        swap = true;
      }
    }
  }
return strings;
} // ends function

// console.log(sortStrings(stringsArray1));
console.log(sortStrings(stringsArray));
// console.log(stringsArray.sort());








// console.log('k' < 'y');
// console.log('a' > 'j');
// console.log('kaa' < 'kab');
// console.log('kavabc' > 'ka');
