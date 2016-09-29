app.factory('todoService', function(){
  var service = {};

  var _items = [];

  service.getTodos = function(){
    return _items
  };

  service.createTodo = function(text, date){
    var item = {
      text: text,
      dueDate: date,
      completed: false
    }

    _items.push(item);
  }

  service.deleteTodo = function(item){
    var index = _items.indexOf(item);
    _items.splice(index, 1);
  }

  service.deleteCompleted = function(){
    for(var i = _items.length - 1; i >= 0; i--){
      if(_items[i].completed === true){
        service.deleteTodo(_items[i]);
      }
    }
  }

  return service;
})