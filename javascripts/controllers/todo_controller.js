app.controller("TodoCtrl", ['$scope','$window', function($scope, $window){

  $scope.hideCompleted = false;
  
  $scope.items = [{text: "foo item", dueDate: new Date(), completed: false}, {text: "foooffffffffyfooooo", dueDate: new Date(), completed: true},
  {text: "scooby dooo", dueDate: new Date(), completed: false}];

  // $scope.item = { text: "Get groceries from the store",
  //                 dueDate: new Date(),
  //                 completed: false};

  $scope.createTodo = function(){
    var todo = {};
    todo.text = $scope.text;
    todo.dueDate = $scope.date;

    $scope.items.push(todo);

    $scope.text = "";
    $scope.date = "";
  };

  $scope.deleteTodo = function(index){
    $scope.items.splice(index, 1);
  };

  $scope.deleteCompleted = function(){
    for(var i = $scope.items.length - 1; i >= 0; i--){
      if($scope.items[i].completed === true){
        $scope.items.splice(i, 1);
      }
    }
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