var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var width = 600;
var heigth = 600;
var cellSize = width/12;

var cells = [];

c.addEventListener("click", function(event){
  var offsetX = 8;
  var offsetY = 8;
  var x = event.pageX - offsetX;
  var y = event.pageY - offsetY;

  coordinatesX = (x - (x % 50)) / 50; // COORDINATES!
  coordinatesY = (y - (y % 50)) / 50; // COORDINATES!

  console.log(coordinatesX, coordinatesY);

  // divide by 12 to find array value

  for (var x = 0; x < cells.length; x++) {
    for (var y = 0; y < cells[0].length; y++) {
      let cell = cells[x][y];
      if (cell.x === coordinatesX * 50 && cell.y === coordinatesY * 50) {
        // do what you want with certain cell
      }
    }
  }
});

function setup() {
  for (var x = 0; x < 12; x++) {
    cells[x] = new Array();
    for (var y = 0; y < 12; y++) {
      cells[x][y] = new Cell(x * 50, y * 50);
    }
  }
}

setup();

function placeMines(amount) {
  let xCoords = [];
  let yCoords = [];

  for (var i = 0; i < amount; i ++) {
    xCoords.push(getRandomInt(1,12));
    yCoords.push(getRandomInt(1,12));
  }
  console.log(xCoords, yCoords);

  for (var x = 0; x < cells.length; x++) {

    for (var y = 0; y < cells[0].length; y++) {


    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}



function Cell(x, y) {
  this.x = x;
  this.y = y;
  ctx.rect(x, y, cellSize, cellSize);
  ctx.stroke();
  //alert("tEST");
  this.scream = function() {
    alert(this.y);
  }
}
