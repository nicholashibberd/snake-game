class Renderer {
  constructor(actions, element) {
    this.actions = actions;
    this.grid = element;

    this.actions.subscribe('update', this.render.bind(this));
  }

  render(evt, activeCells) {
    var table = $('<table></table>');

    for (var i = 0; i < ROWS; i++) {
      var row = $('<tr></tr>');

      for (var j = 0; j < COLUMNS; j++) {
        var key = new Position(j, i).toKey();
        var style = activeCells[key];
        var cell = new Cell(j, i, style);
        row.append(cell.render());
      };

      table.append(row);
    };
    this.grid.html(table);
  }
}
