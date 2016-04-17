angular.module('frontendApp').directive('inlineAuthor', function () { 'use strict';
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<span>' + 
                    
                   '</span>',
        controller: function ($scope, $User) {
            if(!uid){
               $scope.author = {}
            }
            $User.Request({'uid':uid}, function(projects){
                console.log(projects);
            });
        }
    };
});