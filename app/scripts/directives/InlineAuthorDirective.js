angular.module('frontendApp').directive('inlineAuthor', function () { 'use strict';
    return {
        restrict: 'E',
        scope : {
            uid : '='
        },
        replace: true,
        transclude: true,
        template: '<span>' + 
                    '{{user.userName}}' +
                   '</span>',
        controller: function ($scope, $User, $rootScope) {
            if($scope.uid){
                $User.get($rootScope.user._id, function(user){
                    $scope.user = user;
                });
            }
        }
    };
});