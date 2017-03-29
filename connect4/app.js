////////////// window onload
$(function() {
  createBoard();
  toggle = true;
}); ////////////// end window onload

////////////// create game board
var createBoard = function() {
  var $board = $('<div>').attr('id', 'board').attr('class', 'col-md-10');
  $('.row').append($board);

  for (var i = 0; i < 42; i++) {
    $spot = $('<div>').addClass('circle').attr('id', i).text(i)
    $board.append($spot);
    // add hover and event listener IF spot is in bottom row
    if (i >= 35) {
      $spot.hover(function() {
        $(this).css('border', '3px solid black');
      }, function() {
        $(this).css('border', '1px solid black');
      })
      $spot.on('click', firstRowPlacer)
    }
  }
};

////////////// click event handler
var firstRowPlacer = function() {
  if (toggle) {
    $(this).css('background-color', 'purple');
    console.log($(this).siblings());
    toggle = false;

  } else {
    $(this).css('background-color', 'blue');
    console.log($(this).siblings());
    toggle = true;
  }
};
