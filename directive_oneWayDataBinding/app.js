angular.module('myApp', [])
    .controller('MainCtrl', function ($scope, $rootScope) {
        $scope.value = 5;

    })
    .directive('oneWayDataBinding', function () {
        return {
            restrict: 'E',
            scope: {
                value: '@'
            },
            template: 'Directive: <input ng-model="value"/>'
        }
    })


;
    