'use-strict'

angular.module("myApp").filter("titleCase", function () {
    return function (input) {
        if (!input) return input;

        return input
            .toLowerCase()
            .replace(/(?:^|\s|-)\S/g, function (match) {
                return match.toUpperCase();
            });
    };
});