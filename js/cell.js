function Cell(x, y) {
  // =========== variables ================
  this.x = x;
  this.y = y;
  this.mine = false;
  this.number = 0;
  this.isRevealed = false;
  this.neighbours = [];

  ctx.rect(x, y, cellSize, cellSize);
  ctx.stroke();
  
  // =========== methods ================

  this.show = function() {
    ctx.font = '20px serif';
    if (this.number == 0) {
      ctx.rect(x, y, cellSize, cellSize);
      ctx.style = "grey";
    }
    
    // if there is a mine, mark it, else, show number
    this.mine ? 
      ctx.fillText("X", this.x + 25, this.y + 20) : 
      ctx.fillText(this.number, this.x + 25, this.y + 20);
    
    this.isRevealed = true;
  }

  this.clickedOn = function() {
    this.show();
    if (this.number == 0 && !this.mine) {
      this.flood();
    }
  }

  this.flood = function() {
      this.neighbours.forEach(function(c) {
        if (!c.mine && !c.isRevealed && c.number == 0) {
          c.show();
          c.flood();
        } else if (!c.mine && !c.isRevealed) {
          c.show();
        }
      });
   }
}
