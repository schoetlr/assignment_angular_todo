app.controller("TodoCtrl", ['$scope','todoService', function($scope, todoService){

  $scope.hideCompleted = false;
  
  $scope.items = todoService.getTodos();

  // $scope.item = { text: "Get groceries from the store",
  //                 dueDate: new Date(),
  //                 completed: false};

  $scope.createTodo = function(){
    todoService.createTodo($scope.text, $scope.date);
    $scope.text = "";
    $scope.date = "";
  };

  $scope.deleteTodo = function(todo){
    todoService.deleteTodo(todo);
  };

  $scope.deleteCompleted = function(){
    todoService.deleteCompleted();
  };

  $scope.toggleFilter = function(){
    if($scope.hideCompleted === false){
      $scope.hideCompleted = true;
    } else {
      $scope.hideCompleted = false;
    }

  };

  $scope.filterCompleted = function(todo){
    if($scope.hideCompleted){
      if(todo.completed === true){
        return false;
      }

    }

    return true;
  }


}])