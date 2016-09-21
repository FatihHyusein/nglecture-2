angular.module('myApp', [])
    .controller('MainCtrl', function ($scope, $rootScope) {
    })
    .directive('carInputForm', function (carSvc) {
        return {
            templateUrl: './carInputForm.html',
            controller: function ($scope) {
                $scope.addCar = function () {
                    $scope.cars = carSvc.addNewCar({
                        make: $scope.make,
                        model: $scope.model,
                        year: $scope.year
                    });

                    $scope.make = '';
                    $scope.model = '';
                    $scope.year = '';
                };

                $scope.editCar = function () {
                    $scope.cars = carSvc.updateCarByModel({
                        make: $scope.make,
                        model: $scope.model,
                        year: $scope.year
                    });
                }
            }
        }
    })

    .directive('carListItem', function (carSvc) {
        return {
            templateUrl: './carListItem.html',
            controller: function ($scope) {
                $scope.edit = function () {

                };

                $scope.remove = function () {
                    carSvc.removeCarByModel($scope.car);
                };
            }
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

    .factory('carSvc', function () {
        var carsArray = [];

        function findCarIdxByModel(carModel) {
            for (var i = 0; i < carsArray.length; i++) {
                if (carsArray[i].model == carModel) {
                    return i;
                }
            }
            return -1;
        }

        return {
            getCars: function () {
                return carsArray;
            },
            addNewCar: function (newCar) {
                if (newCar.model) {
                    carsArray.push(newCar);
                }
                return carsArray;
            },
            removeCarByModel: function (car) {
                var carIdx = findCarIdxByModel(car.model);

                if (carIdx > -1) {
                    carsArray.splice(carIdx, 1);
                }

                return carsArray;
            },
            updateCarByModel: function (car) {
                var carIdx = findCarIdxByModel(car.model);

                if (carIdx > -1) {
                    carsArray.splice(carIdx, 1);
                }

                return carsArray;
            }
        }
    })
;
    