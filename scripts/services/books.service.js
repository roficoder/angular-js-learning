"use strict";

angular.module("myApp").service("bookService", ["$http",function ( $http) {
  const baseUrl = "http://localhost:3000/";

  this.getBooks = function () {
    return $http.get(baseUrl + "books").then(function (res) {
      console.log(res);
      return res.data;
    });
  };
}]);
