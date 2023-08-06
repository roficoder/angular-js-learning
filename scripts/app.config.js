angular.module('myApp').config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/list", {
        templateUrl: "../templates/views/book-list/book-list.html",
        controller: "listController",
      })
      .when("/add", {
        template: '<add-book></add-book>'
        // templateUrl: "../templates/views/add-book/add-book.html",
        // controller: "addController",
      })
      .otherwise({
        redirectTo: "/list",
      });

    $locationProvider.hashPrefix("");
  },
]);