$(document).ready(function(){
  var element = $('.grid');
  var actions = new Actions();
  var store = new Store(actions);
  var controls = new Controls(actions);
  new Renderer(actions, element);
  actions.start();
});
