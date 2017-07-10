function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.mine = false;
  this.number;

  ctx.rect(x, y, cellSize, cellSize);
  ctx.stroke();

  this.clickedOn = function() {
  	console.log(this.mine);
  }
}
