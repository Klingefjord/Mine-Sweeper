var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var width = 600;
var heigth = 600;
var cellSize = width/12;

// These should be made changeable!
const cellCount = 12;
const mineAmount = 8;

var cells = [];
var mines = [];


// ============ GAME LOGIC =======================

// Event listener for clicking on the canvas
c.addEventListener("click", function(event){
  var offsetX = 8;
  var offsetY = 8;
  var x = event.pageX - offsetX;
  var y = event.pageY - offsetY;

  coordinatesX = (x - (x % 50)) / 50; // COORDINATES!
  coordinatesY = (y - (y % 50)) / 50; // COORDINATES!

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
  let coords = [];

  // Random helper function
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Push random values to holder arrays
  for (var i = 0; i < mineCount; i ++) {
    coords.push(
      [getRandomInt(1,cellCount),
       getRandomInt(1,cellCount)]
    );
  }

  // Initiate cells & palce mines
  initCells(cellCount, coords)
}

function initCells(cellCount, coords) {
  for (var x = 0; x < cellCount; x++) {

    // create new outer array
    cells[x] = new Array();
    for (var y = 0; y < cellCount; y++) {

      // Create new cell
      cells[x][y] = new Cell(x * 50, y * 50);
    }
  }

  checkMines(cellCount, coords);
}

function checkMines(cellCount, coords) {
  for (var y = 0; y < cellCount; y++) {
    for (var x = 0; x < cellCount; x++) {
      initNeighbours(x, y);

      // check if mines
      coords.forEach(function(cellCoord) {
        if (cellCoord[0] == x && cellCoord[1] == y) {
          cells[x][y].mine = true;
          cells[x][y].neighbours.forEach(function(cell) {
            cell.number++;
          });
        }
      });
    }
  }
}

function initNeighbours(x, y) {

  // TODO: Find a better way to test if cell is undefined
  if (y < cellCount - 1) {
    cells[x][y].neighbours.push(cells[x][y + 1])
  };
  if (y > 0) {
    cells[x][y].neighbours.push(cells[x][y - 1])
  };
  if (x < cellCount - 1) {
    cells[x][y].neighbours.push(cells[x + 1][y])
  };
  if (x > 0) {
    cells[x][y].neighbours.push(cells[x - 1][y]);
  };
  if (x < cellCount - 1 && y < cellCount - 1) {
    cells[x][y].neighbours.push(cells[x + 1][y + 1]);
  };
  if (x > 0 && y > 0) {
    cells[x][y].neighbours.push(cells[x - 1][y - 1]);
  };
  if (x < cellCount - 1 && y > 0) {
    cells[x][y].neighbours.push(cells[x + 1][y - 1]);
  };
  if (x > 0 && y < cellCount - 1) {
    cells[x][y].neighbours.push(cells[x - 1][y + 1]);
  };
}

// ============= BEGIN PROGRAM ====================

setup(cellCount, mineAmount);

