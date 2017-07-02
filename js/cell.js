function Cell(x, y) {
  this.x = x;
  this.y = y;
  ctx.rect(x, y, cellSize, cellSize);
  ctx.stroke();

  this.scream = function() {

  }
}
