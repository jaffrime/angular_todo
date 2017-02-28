app.controller("todoCtrl", function($scope, todoFactory) {

  $scope.todos = todoFactory.todos;

});
