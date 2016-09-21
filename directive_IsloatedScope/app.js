angular.module('myApp', [])
    .controller('MainCtrl', function ($scope, $rootScope) {
        $scope.value = 5;

    })
    .directive('isolatedScope', function () {
        return {
            restrict: 'E',
            scope: {},
            template: '<input ng-model="value"/>'
        }
    })


;
    