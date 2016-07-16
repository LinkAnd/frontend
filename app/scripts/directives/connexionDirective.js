'use strict';

angular.module('frontendApp') .directive('connexion', function (LocaleService) { 'use strict';

        return {
            restrict: 'E',
            replace: true,
            template: '<li>'+
            		'<a ng-show="!isConnected" ng-click="connexion()">Connexion</a>' +
            		'<a ng-show="isConnected" ng-click="disconnect()">'+
                    'Disconnect</a>' +
            		'</li>',
            controller: function ($scope, $rootScope) {
            	console.log($rootScope.user);
            	$scope.connexion = function(){
            		window.location = "http://localhost:3000/auth/facebook";
            	}
            	
            	$scope.disconnect = function(){
            		$rootScope.accesstoken = null;
                    $rootScope.user = null;
                    $rootScope.isConnected = false;
            	};
            }
        };
    });