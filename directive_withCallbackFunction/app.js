angular.module('myApp', [])
    .controller('MainCtrl', function ($scope, $rootScope) {
        $scope.text = 'This will be wrapped in a dialog';
        $scope.dialogIsHidden = true;

        $scope.onClose = function () {
            $scope.dialogIsHidden = true;
        }
    })
    .directive('myDialog', function () {
        return {
            scope: {
                close: '&close'
            },
            transclude: true,
            template: '<h1>DIALOG</h1>' +
            '<div style="border: 1px solid red">' +
            '<div class="dialog" ng-transclude></div>' +
            '</div>' +
            '<button ng-click="close()">Close</button>'
        }
    })
;
    