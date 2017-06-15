var margins = 5;
var minHeight = 100;
var minWidth = 100;
var imageHolder = document.getElementById('image-holder');
var image = document.getElementsByTagName('img')[0];
var clicked = null;
var onRightEdge = null;
var onLeftEdge = null;
var onTopEdge = null;
var onBottomEdge = null;
var b = null;
var x = null;
var y = null;
var e;
var isResizing;

var calc = function(e) {
	b = imageHolder.getBoundingClientRect();
    // console.log("CLIENTX:" + e.clientX);
    // console.log("CLIENTY:" + e.clientY);
    // console.log("BOUNDING RECT width:" + b.width);
    // console.log("BOUNDING RECT height:" + b.height);
    x = e.clientX - b.left;
    y = e.clientY - b.top;
    // console.log(x, y);
    onTopEdge = y < margins;
    onLeftEdge = x < margins;
    onRightEdge = x >= b.width - margins;
    onBottomEdge = y >= b.height - margins;
};

var onDown = function(e) {
	calc(e);
    var isResizing = onTopEdge || onLeftEdge || onRightEdge || onBottomEdge;

    clicked = {
    	x: x,
        y: y,
        clientx: e.clientX,
        clienty: e.clientY,
        w: b.width,
        h: b.height,
        isResizing: isResizing,
        onTopEdge: onTopEdge,
        onLeftEdge: onLeftEdge,
        onRightEdge: onRightEdge,
        onBottomEdge: onBottomEdge
    };
    console.log("Is Resizing: " + isResizing);
    console.log("Clicked Is Resizing: " + clicked.isResizing);
};

var onMove = function(ee) {
  // return;
  ee.preventDefault();
  // console.log(onRightEdge);
	calc(ee);
    e = ee;
    animate();
};

var onUp = function(e) {
	calc(e);
    clicked = {};
    isResizing = false;
    console.log("Is Resizing: " + isResizing);
    console.log("Clicked Is Resizing: " + clicked.isResizing);
};

var animate = function() {
  if (clicked && clicked.isResizing) {
    if (clicked.onRightEdge) imageHolder.style.width = Math.max(x, minWidth) + 'px';
    if (clicked.onBottomEdge) imageHolder.style.height = Math.max(y, minHeight) + 'px';
    if (clicked.onLeftEdge) {
      var currentWidth = Math.max(clicked.clientx - e.clientX + clicked.w, minWidth);
      if (currentWidth > minWidth) {
        imageHolder.style.width = currentWidth + 'px';
        imageHolder.style.left = e.clientX + 'px';
      }
    }
    if (clicked.onTopEdge) {
      var currentHeight = Math.max(clicked.clienty - e.clientY + clicked.h, minHeight);
      if (currentHeight > minHeight) {
        imageHolder.style.height = currentHeight + 'px';
        imageHolder.style.top = e.clientY + 'px';
      }
    }
  }
  if (onRightEdge && onBottomEdge || onLeftEdge && onTopEdge) {
	imageHolder.style.cursor = 'nwse-resize';
} else if (onRightEdge && onTopEdge || onBottomEdge && onLeftEdge) {
	imageHolder.style.cursor = 'nesw-resize';
} else if (onRightEdge || onLeftEdge) {
	imageHolder.style.cursor = 'ew-resize';
  console.log(onRightEdge, onLeftEdge);
} else if (onBottomEdge || onTopEdge) {
	imageHolder.style.cursor = 'ns-resize';
} else {
	imageHolder.style.cursor = 'default';
}

};

animate();

//////// event listeners
console.log(imageHolder);
document.addEventListener('mousemove', onMove);
document.addEventListener('mouseup', onUp);
imageHolder.addEventListener('mousedown', onDown);
