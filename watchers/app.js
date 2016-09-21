angular.module('myApp', [])
    .controller('MainCtrl', function ($scope) {
        $scope.value = 1;
        $scope.changes = 0;

        var valueWatcherClearer = $scope.$watch('value', function (newVal, oldVal) {
            $scope.changes++;
        });

        $scope.clearWatch = function () {
            valueWatcherClearer();
        }
    })
;
    