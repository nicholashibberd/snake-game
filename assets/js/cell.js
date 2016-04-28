class Cell {
  constructor(x, y, style) {
    this.coordinates = [x, y];
    this.style = style;
  }

  classes() {
    var classes = ['cell'];
    if (this.style) classes.push(this.style);
    return classes.join(' ');
  }

  render() {
    return $('<td class="' + this.classes() +'"></td>');
  }
}
