class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toCoordinates() {
    return [this.x, this.y];
  }

  toKey() {
    return this.x + "-" + this.y;
  }

  withNeighboursTo(direction, count) {
    var collection = [this];
    var current = this;
    for (var i = 0; i < count; i++) {
      var neighbour = current.cellTo(direction);
      collection.push(neighbour);
      current = neighbour;
    }
    return collection;
  }

  cellTo(direction) {
    switch(direction) {
      case NORTH:
        return this.cellToNorth();
        break;
      case EAST:
        return this.cellToEast();
        break;
      case WEST:
        return this.cellToWest();
        break;
      case SOUTH:
        return this.cellToSouth();
        break;
    }
  }

  cellToNorth() {
    if (this.y === 0) {
      var newY = ROWS;
    } else {
      var newY = this.y - 1;
    }
    return new Position(this.x, newY);
  }

  cellToEast() {
    if (this.x === COLUMNS) {
      var newX = 0;
    } else {
      var newX = this.x + 1;
    }
    return new Position(newX, this.y);
  }

  cellToSouth() {
    if (this.y ===  ROWS) {
      var newY = 0;
    } else {
      var newY = this.y + 1
    }
    return new Position(this.x, newY);
  }

  cellToWest() {
    if (this.x === 0) {
      var newX = COLUMNS;
    } else {
      var newX = this.x - 1;
    }
    return new Position(newX, this.y);
  }
}
