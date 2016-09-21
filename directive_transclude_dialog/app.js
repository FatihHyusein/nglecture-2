angular.module('myApp', [])
    .controller('MainCtrl', function ($scope, $rootScope) {
        $scope.text = 'This will be wrapped in a dialog';
        $scope.dialogIsHidden = false;

        $scope.hideDialog = function () {
            $scope.dialogIsHidden = false;
        }
    })
    .directive('myDialog', function () {
        return {
            transclude: true,
            template: '<h1>DIALOG</h1>' +
            '<div style="border: 1px solid red">' +
            '<div class="dialog" ng-transclude></div>' +
            '</div>'
        }
    })
;
    