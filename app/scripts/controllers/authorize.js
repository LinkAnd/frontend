'use strict';

angular.module('frontendApp')
  .controller('AuthorizeCtrl', function ($http, $routeParams, $rootScope, $scope, $location) {
    $rootScope.accessToken = $routeParams.accessToken;
    $http({method: 'GET', url: 'http://localhost:3000/authorize', headers: {'accessToken' : $rootScope.accessToken} }).success(function(response){
    	$rootScope.user = response;
    	$rootScope.isConnected = true;
    });
    $location.path('/');
  });