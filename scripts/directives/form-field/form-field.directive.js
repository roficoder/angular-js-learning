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
        name: "@"
      },
    };
  },
]);
