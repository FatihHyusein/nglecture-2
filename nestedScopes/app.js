angular.module('myApp', [])
    .controller('MainCtrl', function ($scope) {
        $scope.ctrlName = 'main';
    })
    .controller('InnerCtrl',function ($scope) {
        $scope.ctrlName = 'inner';
    });