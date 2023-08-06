var myApp = angular.module("myApp", ["ngRoute", "addBook"]);



myApp.controller("listController", [
  "$scope",
  "$http",
  "$location",
  "bookService",
  function ($scope, $http, $location, bookService) {
    $scope.name = "Raouf";
    $scope.orderText;

    $scope.books = [];

    $scope.orderByMe = function (param) {
      $scope.orderText = param;
    };

    bookService.getBooks().then(function (data) {
      $scope.books = data;
    });
  },
]);
