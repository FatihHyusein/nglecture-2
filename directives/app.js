angular.module('myApp', [])
    .controller('MainCtrl', function ($scope, $rootScope) {


    })

    .directive('elementDirective', function () {
        return {
            restrict: 'E',
            template: '<div>time: {{new Date()}}</div>'
        }
    })
    .directive('attributeDirective', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attributes) {

            }
        }
    })

    .directive('classDirective', function () {
        return {
            restrict: 'C',
            link: function (scope, element, attributes) {

            }
        }
    })

    .directive('isolatedScope', function () {
        return {
            restrict: 'E',
            scope: {},
            template: '<input ng-model="value"/>'
        }
    })


;
    