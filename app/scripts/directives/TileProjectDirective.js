/**
* Directive for display a project a tile
*/
angular.module('frontendApp').directive('tileProject', function () { 'use strict';
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<h3>{{project.name}}</h3>',
        controller: function ($scope) {
            
        }
    };
});