angular.module("AMail", ["Controllers", "ngRoute"]).config(["$routeProvider", function($routeProvider){
  $routeProvider.when("/", {
    controller : "ListController",
    templateUrl : "/partials/list.html"
  }).
  when("/view/:id", {
    controller : "DetailController",
    templateUrl : "/partials/detail.html"
  }).
  otherwise({
    redirectTo: "/"
  });
}]);