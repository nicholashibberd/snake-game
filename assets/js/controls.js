class Controls {
  constructor(actions) {
    this.actions = actions;
    this.listen();
  }

  listen() {
    var _this = this;

    window.addEventListener("keydown", function(evt) {
      if (evt.code === "ArrowUp" || evt.code === "KeyK") {
        evt.preventDefault();
        _this.actions.publish('changeDirection', NORTH);
      }
      else if (evt.code === "ArrowDown" || evt.code === "KeyJ") {
        evt.preventDefault();
        _this.actions.publish('changeDirection', SOUTH);
      }
      else if (evt.code === "ArrowLeft" || evt.code === "KeyH") {
        evt.preventDefault();
        _this.actions.publish('changeDirection', WEST);
      }
      else if (evt.code === "ArrowRight" || evt.code === "KeyL") {
        evt.preventDefault();
        _this.actions.publish('changeDirection', EAST);
      }
    });
  }
}
