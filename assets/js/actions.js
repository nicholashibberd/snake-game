class Actions {
  constructor() {
    this.events = $({});
  }

  start() {
    var _this = this;
    this.game = setInterval(function() {
      _this.publish('start');
    }, 100);
  }

  end() {
    clearInterval(this.game);
  }

  subscribe(action, callback) {
    this.events.on(action, callback);
  }

  publish(action, data) {
    this.events.trigger(action, data);
  }
}
