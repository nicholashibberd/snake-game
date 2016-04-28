class Store {
  constructor(actions) {
    this.actions = actions;
    this.snake = new Snake(this.endGame.bind(this));
    this.placeFood();

    this.actions.subscribe('start', this.moveSnake.bind(this));
    this.actions.subscribe('changeDirection', this.changeDirection.bind(this));
  }

  placeFood() {
    var row = Utils.getRandomInt(1, ROWS);
    var column = Utils.getRandomInt(1, ROWS);
    var position = new Position(column, row);
    var key = position.toKey();
    if (this.snake.activeCells[key]) {
      this.placeFood()
    } else {
      this.food = position;
    }
  }

  activeCells() {
    var styles = {};
    var foodKey = this.food.toKey();
    styles[foodKey] = "food";

    return Object.assign(styles, this.snake.activeCells());
  }

  changeDirection(evt, direction) {
    this.snake.changeDirection(direction);
  }

  moveSnake() {
    this.snake.move();
    if (this.snake.entersCell(this.food)) {
      this.placeFood();
      this.snake.grow();
    }
    this.actions.publish('update', this.activeCells());
  }

  endGame() {
    this.actions.end();
  }
}
