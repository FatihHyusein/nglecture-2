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
            }
        }
    })

    .directive('carListItem', function (carSvc) {
        return {
            templateUrl: './carListItem.html',
            controller: function ($scope) {
                $scope.edit = function () {
                    $scope.isHiddenPopup = true;
                };

                $scope.remove = function ($index) {
                    carSvc.removeCar($index);
                };
            }
        }
    })

    .directive('editPopup', function () {
        return {
            scope: {
                save: '&save'
            },
            transclude: true,
            templateUrl: './editPopup.html',
            controller: function ($scope) {
                $scope.isHiddenPopup = false;

                $scope.close = function () {
                    $scope.isHiddenPopup = true;
                }
            }
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
            removeCar: function ($index) {
                carsArray.splice($index, 1);

                return carsArray;
            },
            updateCar: function ($index, carData) {
                carsArray[$index] = carData;

                return carsArray;
            }
        }
    })
;
    