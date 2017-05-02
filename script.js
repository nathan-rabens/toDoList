var app = angular.module('Module', []);


app.controller('Controller', function($scope) {
  console.log('Controller has loaded');

  $scope.toDoList = [];
  $scope.addItem = function(newItem) {

    console.log($scope.toDoList);

    $scope.toDoList.push({name: newItem.name});
  }
})
