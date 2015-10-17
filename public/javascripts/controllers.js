angular.module("Controllers", ["Services"])
// ListController
.controller("ListController", ["$scope", "MessageData", function($scope, MessageData){
  $scope.messages = MessageData.all();
}])
// DetailController
.controller("DetailController", ["$scope", "MessageData", "$routeParams", function($scope, MessageData, $routeParams){
  $scope.message = MessageData.get($routeParams.id);
}]);