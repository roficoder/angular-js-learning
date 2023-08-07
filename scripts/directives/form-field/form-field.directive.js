"use-strict";

angular.module("myApp").directive("formField", [
  function () {
    return {
      restrict: "E",
      templateUrl: "templates/partials/form-field.template.html",
      scope: {
        label: "@",
        model: "=",
        required: "@",
        name: "@",
        form: '=',
        select: '@',
        options: '=',
        type: '@'
      },
      controller: function ($scope) {
        $scope.select = $scope.select === 'true'
      }
    };
  },
]);
