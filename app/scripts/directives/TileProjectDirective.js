/**
* Directive for display a project a tile
*/
angular.module('frontendApp').directive('tileProject', function () { 'use strict';
    return {
        restrict: 'E',
        replace: true,
        scope : {
            project : '='
        },
        transclude: true,
        template: '<div>' + 
                    '<h3 ng-click="setExpand()">{{project.name}}</h3>' +
                    '<div ng-show="expand">' +
                       '<label>{{"description" | translate}} : </label> <span class="description">{{project.description}}<span> <br/>' +
                       '<label>{{"auteur" | translate}} : </label>  <inline-author uid="project.author"></inline-author><br/>' +
                    '</div>' +
                   '</div>',
        controller: function ($scope) {            
        	$scope.setExpand = function(){
            	$scope.expand  = ($scope.expand === true) ? false : true;
            	return;
            }
        }
    };
});