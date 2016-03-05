'use strict';

angular.module('frontendApp')
.controller('ProjectCtrl', function($TestData, $scope){
    $TestData.Project.get(function(data){
    	$scope.index = Object.keys(data).length;
    	$scope.projects = data;
    });
});