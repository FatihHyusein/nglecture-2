angular.module('myApp', [])
    .controller('MainCtrl', function ($scope, $rootScope) {
        $scope.value = 0;
        var eventListenerClearer = $rootScope.$on('bradcastNotification', function (event, data) {
            $scope.value = data.magic;
        });

        $scope.clearWatch = function () {
            eventListenerClearer();
        }

    })

    .controller('AnotherCtrl', function ($scope, $rootScope) {
        $scope.magicNumber = 5;

        $scope.notifyAll = function () {
            $scope.$emit('bradcastNotification', {magic: ++$scope.magicNumber});
        }
    })

    .controller('NestedCtrl', function ($scope, $rootScope) {
        $scope.value = 0;
        $scope.$on('bradcastNotification', function (event, data) {
            $scope.value = data.magic;
        })
    })
;
    