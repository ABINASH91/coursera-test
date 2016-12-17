(function() {
    'use strict'
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', controllerFn);

    controllerFn.$inject = ['$scope'];

    function controllerFn($scope) {
        $scope.message = '';

        $scope.checkDishesArray = function() {
            if ($scope.dishesArray) {
                var dishesList = $scope.dishesArray.split(',').filter(Boolean);
                if (dishesList.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            } else {
                $scope.message = 'Please enter data first';
            }
        };
    };
})();