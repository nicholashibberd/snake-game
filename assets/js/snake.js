class Snake {
  constructor(endGame) {
    this.place();
    this.endGame = endGame;
    this.direction = this.randomDirection();
  }

  randomDirection() {
    var random = Utils.getRandomInt(0, 3);
    return DIRECTIONS[random];
  }

  place() {
    var row = Utils.getRandomInt(1, ROWS);
    var column = Utils.getRandomInt(1, ROWS);
    var snakeHead = new Position(column, row);
    var direction = this.randomDirection();
    this.cells = snakeHead.withNeighboursTo(direction, 2);
  }

  activeCells() {
    var styles = {};

    this.cells.forEach(function(pos) {
      var snakeKey = pos.toKey();
      styles[snakeKey] = "snake";
    })

    return styles;
  }

  entersCell(cell) {
    return !!this.activeCells()[cell.toKey()];
  }

  changeDirection(direction) {
    if (direction !== OPPOSITE_DIRECTIONS[this.direction]) {
      this.direction = direction;
    }
  }

  move() {
    this.cells.pop();
    var newSnakeHead = this.cells[0].cellTo(this.direction);
    if (this.entersCell(newSnakeHead)) this.endGame();
    this.cells.unshift(newSnakeHead);
  }

  grow() {
    var direction = OPPOSITE_DIRECTIONS[this.direction];
    var tailCell = this.cells[this.cells.length - 1];
    var newCell = tailCell.cellTo(direction);
    this.cells.push(newCell);
  }
}
