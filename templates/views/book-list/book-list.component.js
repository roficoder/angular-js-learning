angular.module("bookList").component("bookList", {
  templateUrl: "book-list/book-list.template.html",
  controller: [
    "$routeParams",
    "$scope",
    "$http",
    function listController($routeParams, $scope, $http) {
      $scope.name = "Raouf";
      $scope.orderText;

      $scope.books = [];

      $scope.orderByMe = function (param) {
        $scope.orderText = param;
      };

      $http.get("http://localhost:3000/books").then(function (res) {
        console.log(res);
        $scope.books = res.data;
      });
    },
  ],
});
