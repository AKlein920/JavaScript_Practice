$(function() {

var $container = $('#container');
// console.log($container);

var $h1 = $('<h1>');
$h1.text('Hogwarts');
$container.append($h1);

var $Abi = $('<h2>');
$Abi.text('Name: Abi');
$container.append($Abi);

var $house = $('<h3>');
$house.text('House: Hufflepuff');
$container.append($house);

var $pet = $('<h4>');
$pet.addClass('dog');
$pet.text('Pet: Fido the dog');
$container.append($pet);

var $wand = $('<h4>');
$wand.text('Wand: Probably a spatula');
$container.append($wand);

var $trunk = $('<ul>');
$trunk.attr('storage', 'trunk');
$container.append($trunk);

var trunkItems = ['butter beer', 'invisibility cloak', 'magic map', 'time turner', 'leash', "Bertie Bott's Every Flavor [Jelly] Beans"];

for (var i = 0; i < trunkItems.length; i++) {
  var $li = $('<li>').text(trunkItems[i]);

  if (trunkItems[i] == 'leash') {
    $li.addClass('dog');
  } else if (trunkItems[i] == 'butter beer' || trunkItems[i] == "Bertie Bott's Every Flavor [Jelly] Beans") {
    console.log('harry po-a');
  } else {
    $li.addClass('secret');
  }

  $trunk.append($li);
}

var $h5 = $('<h5>');
$h5.text('Spring 2017');
$container.append($h5);

var $table = $('<table>');
$container.append($table);

var $tr1 = $('<tr>');
$table.append($tr1);

var $thDay = $('<th>').text('Day');
var $thClasses = $('<th>').text('Classes');
$tr1.append($thDay, $thClasses);

var $tr2 = $('<tr>');
$table.append($tr2);

var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var classes = ['JavaScript', 'Angular', 'React', 'Node', 'Rails'];

for (var i = 0; i < weekdays.length; i++) {
  var $trDays = $('<tr>');
  $table.append($trDays);
  var $dayData = $('<td>').text(weekdays[i]);
  $trDays.append($dayData);
}






});
