var money = 0;
var tool;
var choice;

/////// MAKE SOME MONEY ///////
var cutGrass = function(tool, money) {
  if (tool == 'teeth') {
    money += 1;
    alert('Yummy grass. You now have: $' + money);
    work(tool, money);
  } else if (tool == 'rusty scissors') {
    money += 5;
    alert('Rusty goodness. You now have: $' + money);
    work(tool, money);
  } else if (tool == 'push-mower') {
    money += 50;
    alert('Pushy goodness. You now have: $' + money);
    work(tool, money);
  } else if (tool == 'power-mower') {
    money += 100;
    alert('Powerful. You now have: $' + money);
    work(tool, money);
  } else if (tool == 'team') {
    money += 250;
    alert('Teamwork makes the dream work. You now have: $' + money);
    work(tool, money);
  }
}

/////// UPGRADE TOOL ///////
var upgrade = function(tool, money) {
  var upgradeChoice = prompt('What tool would you like to use? You currently have: $' + money + ' and are using ' + tool + '. Do some work to get more money. \n teeth: free \n rusty scissors: $5 \n push-mower: $25 \n power-mower: $250 \n team: $500');

  if (money >= 5 && tool == 'teeth' && upgradeChoice == 'rusty scissors') {
    tool = upgradeChoice;
    money -= 5;
  } else if (money >= 25 && tool == 'rusty scissors' && upgradeChoice == 'push-mower') {
    tool = upgradeChoice;
    money -= 25;
  } else if (money >= 250 && tool == 'push-mower' && upgradeChoice == 'power-mower') {
    tool = upgradeChoice;
    money -= 250;
  } else if (money >= 500 && tool == 'power-mower' && upgradeChoice == 'team') {
    tool = upgradeChoice;
    money -= 500;
  }

  alert('You are using: ' + tool + ' and have $ ' + money);
  work(tool, money);
}

/////// GAME START ///////
var start = function() {
  alert('Welcome to yardwork app!');

  tool = prompt('What tool would you like to use? You currently have: $' + money + '. Do some work to get more money. \n teeth: free \n rusty scissors: $5 \n push-mower: $25 \n power-mower: $250 \n team: $500');

  work(tool, money);
}

var work = function(tool, money) {
  if (tool == 'team' && money >= 1000) {
    alert('You win!');
  }

  choice = prompt('You are using: ' + tool + '. Work today? Yes, no, or upgrade tool.');
  if (choice == 'yes') {
    cutGrass(tool, money);
  } else if (choice == 'no') {
    alert('You must be happy with no money.');
  } else if (choice == 'upgrade tool') {
    upgrade(tool, money);
  }
}

/////// RESET GAME ///////
var startOver = function() {

}

start();
