console.log("LINKED");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

// Our Setting
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// Starter code for the body
var body = document.querySelector('body');

function makeMiddleEarth() {
    // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");
  middleEarth.setAttribute('id', 'middle-earth');
  body.appendChild(middleEarth);
    // add each land as an article tag (add them one by one in a loop)
    // inside each article tag include an h1 with the name of the land
    // each article should also have a class equal to it's name ('The Shire' element should have a class of 'The Shire')
    // append middle-earth to your document body
  for (var i = 0; i < lands.length; i++) {
    var landElements = document.createElement("article");
    landElements.innerHTML = "<h1>" + lands[i];
    landElements.setAttribute("class", lands[i]);
    middleEarth.appendChild(landElements);
  }
};
makeMiddleEarth();

function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the first article tag on the page)
    // give each hobbit a class of hobbit
    var newUl = document.createElement("ul");
    var shire = document.querySelector('article');
    shire.appendChild(newUl);

    for (var i = 0; i < hobbits.length; i++) {
      var hobbit = document.createElement('li');
      hobbit.innerHTML = hobbits[i];
      hobbit.setAttribute('class', 'hobbit');
      newUl.appendChild(hobbit);
    }
};
makeHobbits();

function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    // give the div a class of 'magic-imbued-jewelry'
    // add the ring as a child of Frodo
    var ring = document.createElement('div');
    ring.setAttribute('id', 'the-ring');
    ring.setAttribute('class', 'magic-imbued-jewelry');
    var hobbits = document.getElementsByClassName('hobbit');
    var frodo = hobbits[0];
    frodo.appendChild(ring);
};
keepItSecretKeepItSafe();

function makeBuddies() {
    // create an aside tag
    // attach an unordered list of the 'buddies' in the aside
    // insert your aside as a child element of rivendell
    var friendsContainer = document.createElement('aside');
    var friendsUl = document.createElement('ul');
    var lands = document.querySelectorAll('article');
    // console.log(lands);
    var rivendell = lands[1];
    rivendell.appendChild(friendsContainer);
    friendsContainer.appendChild(friendsUl);
    for (var i = 0; i < buddies.length; i++) {
      var buddy = document.createElement('li');
      buddy.innerHTML = buddies[i];
      friendsUl.appendChild(buddy);
    }
};
makeBuddies();

function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'
    var friendsContainer = document.getElementsByTagName('aside');
    friendsContainer[0].childNodes[0].childNodes[3].innerHTML = 'Aragorn';
    // friendsContainer[0].childNodes[3].innerHTML = 'Aragorn';
};
beautifulStranger();

function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    var lands = document.querySelectorAll('article');
    var hobbitUl = lands[0].children[1];
    // console.log(hobbitUl);
    var rivenAside = lands[1].children[1];
    // console.log(rivenAside);
    rivenAside.appendChild(hobbitUl);
};
leaveTheShire();

function forgeTheFellowShip() {
    // create a new div with an id of 'the-fellowship'
    var fellowDiv = document.createElement('div');
    fellowDiv.setAttribute('id', 'the-fellowship');
    // add each hobbit and buddy one at a time to 'the-fellowship'
    var fellowship = [];
    var Rivendell = document.querySelectorAll('article')[1];
    Rivendell.appendChild(fellowDiv);
    var fellowDivUl = document.createElement('ul');
    fellowDiv.appendChild(fellowDivUl);

    var buddies = Rivendell.children[1].children[0].children;
    var hobbits = Rivendell.children[1].children[1].children;
    for (var i = 0; i < buddies.length; i++) {
      fellowship.push(buddies[i]);
    }
    for (var i = 0; i < hobbits.length; i++) {
      fellowship.push(hobbits[i]);
    }
    // console.log(fellowship);
    for (var i = 0; i < fellowship.length; i++) {
      // alert(fellowship[i].innerText + ' has joined the fellowship');
      fellowDivUl.appendChild(fellowship[i]);
    }
    // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
    // append the fellowship div to rivendell
};
forgeTheFellowShip();

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('the horn of Gondor has been blown!');
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  var boromir = document.getElementsByTagName('li')[4];
  boromir.style.setProperty("text-decoration", "line-through");
  // console.log(boromir);
  // Remove Boromir from the Fellowship
  boromir.style.setProperty("display", "none");
};
hornOfGondor();

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var hobbits = document.getElementsByClassName('hobbit');
  // console.log(hobbits);
  var frodo = hobbits[0];
  var sam = hobbits[1];
  console.log(frodo);
  console.log(sam);
  var mordor = document.getElementsByTagName('article')[2];
  var mordorUl = document.createElement('ul');
  mordor.appendChild(mordorUl);
  mordorUl.appendChild(frodo);
  mordorUl.appendChild(sam);
  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mountDoom);
  // add a div with an id of 'mount-doom' to Mordor
};
itsDangerousToGoAlone();

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  var mordor = document.getElementsByTagName('article')[2];
  mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  var ring = document.getElementById('the-ring');
  gollum.appendChild(ring);
  // Move Gollum into Mount Doom
  var mountDoom = document.getElementById('mount-doom');
  mountDoom.appendChild(gollum);
};
weWantsIt();

function thereAndBackAgain() {
  var gollum = document.getElementById('gollum');
  var mountDoom = document.getElementById('mount-doom');
  mountDoom.removeChild(gollum);
  // remove Gollum and the Ring from the document
  var hobbits = document.querySelectorAll('.hobbit');
  console.log(hobbits);
  var shire = document.getElementsByTagName('article')[0];
  var shireUl = document.createElement('ul');
  shire.appendChild(shireUl);
  for (var i = 0; i < hobbits.length; i++) {
    shireUl.appendChild(hobbits[i]);
  }
  // Move all the hobbits back to the shire
};
thereAndBackAgain();
