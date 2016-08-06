'use strict';

angular.module('frontendApp')
  .controller('AuthorizeCtrl', function ($http, $routeParams, $rootScope, $scope, $location, $User) {
  	$User.me($routeParams.accessToken, function(user){
  		$rootScope.user = user;
    	$rootScope.isConnected = true;
    	$location.path('/');
  	});
  });