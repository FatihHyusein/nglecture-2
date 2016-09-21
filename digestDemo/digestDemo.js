angular.module('myApp', [])
    .controller('MainCtrl', function ($scope) {
        $scope.magicNumber = 3;

        $scope.updateMagic = function () {
            $scope.magicNumber++;
            console.log($scope.magicNumber);
        };

        $scope.incrementWithDelay = function () {
            setTimeout(function () {
                // $scope.$apply(function () {
                    $scope.magicNumber++;
                // });
                console.log($scope.magicNumber);


            },1000)
        };

        // $scope.$watch('magicNumber', function () {
        //      $scope.magicNumber++;
        // })
    });