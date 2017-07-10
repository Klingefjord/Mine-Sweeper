function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.mine = false;
  this.number = 0;

  ctx.rect(x, y, cellSize, cellSize);
  ctx.stroke();

  this.clickedOn = function() {
  	console.log("test");
    ctx.font = '20px serif';
    this.mine ? ctx.fillText("MINE!", this.x + 25, this.y + 20) : ctx.fillText(this.number, this.x + 25, this.y + 20);
  }
}
