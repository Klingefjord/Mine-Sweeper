var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var width = 600;
var heigth = 600;
var cellSize = width/12;

// These should be made changeable!
const cellCount = 12;
const mineAmount = 5;

var cells = [];
var mines = [];

// Event listener for clicking on the canvas
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
        cell.clickedOn();
      }
    }
  }
});

function setup(cellCount, mineCount) {
  // Holder arrays
  let xCoords = [];
  let yCoords = [];

  // Random helper function
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Push random values to holder arrays
  for (var i = 0; i < mineCount; i ++) {
    xCoords.push(getRandomInt(1,cellCount));
    yCoords.push(getRandomInt(1,cellCount));
  }

  // Initiate cells & palce mines
  initCells(cellCount, xCoords, yCoords)
}

setup(cellCount, mineAmount);

function initCells(cellCount, xCoords, yCoords) {
  for (var x = 0; x < cellCount; x++) {

    // create new outer array
    cells[x] = new Array();
    for (var y = 0; y < cellCount; y++) {

      // Create new cell
      cells[x][y] = new Cell(x * 50, y * 50);
    }
  }

  checkMines(cellCount, xCoords, yCoords);
}

function checkMines(cellCount, xCoords, yCoords) {
  console.log(xCoords, yCoords);
  for (var y = 0; y < cellCount; y++) {
    for (var x = 0; x < cellCount; x++) {

      // check if mines
      if (xCoords.indexOf(x) !== -1 && yCoords.indexOf(y) !== -1) {
        cells[x][y].mine = true;


        // TODO: Find a better way to test if cell is undefined
        if (cells[x][y + 1]) { cells[x][y + 1].number++ };
        if (cells[x][y - 1]) { cells[x][y-1].number++ };
        if (cells[x + 1][y]) { cells[x + 1][y].number++ };
        if (cells[x - 1][y]) { cells[x - 1][y].number++ };
        if (cells[x + 1][y + 1]) { cells[x + 1][y + 1].number++ };
        if (cells[x - 1][y - 1]) { cells[x - 1][y - 1].number++ };
        if (cells[x + 1][y - 1]) { cells[x + 1][y - 1].number++ };
        if (cells[x - 1][y + 1]) { cells[x - 1][y + 1].number++ };
      }
    }
  }
}
