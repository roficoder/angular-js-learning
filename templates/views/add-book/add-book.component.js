'use-strict';

angular.module("addBook").component("addBook", {
  templateUrl: "templates/views/add-book/add-book.template.html",
  controller: [
      "$scope", 
      "$http",
    "$location",
    function ($scope, $http, $location) {
      $scope.categories = ["Science", "Fiction", "History", "Religion"];
      $scope.shelves = ["A1", "A2", "B1", "B2", "B3"];
    
      
      $scope.newBook = {
        name: "",
        author: "",
        category: "",
        shelf: "",
        lended: undefined,
        remaining: undefined,
      };

      $scope.addBook = function (event) {
        event.preventDefault();

        const newBook = {
          name: $scope.newBook.name,
          author: $scope.newBook.author,
          category: $scope.newBook.category,
          shelf: $scope.newBook.shelf,
          date: $scope.newBook.date,
          lended: $scope.newBook.lended,
          remaining: $scope.newBook.remaining,
        };

        $http
          .post("http://localhost:3000/books", newBook)
          .then(function (res) {
            console.log("New book added successfully:", res.data);
            $location.path("#/list");
          })
          .catch(function (error) {
            console.error("Error adding new book:", error);
          });
      };
    },
  ],
});
