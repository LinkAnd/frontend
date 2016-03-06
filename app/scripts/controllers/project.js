'use strict';

angular.module('frontendApp')
.controller('ProjectCtrl', function($TestData, $scope){
    $TestData.Project.get(function(data){
    	$scope.projects = data;
    	$scope.result = data;
    });
    $scope.search = null;
    $scope.properties = [
        "name",
        "tags"
    ];

    $scope.getReach = function(){
    	$scope.result = [];

    	if($scope.search === null){
    		$scope.result = $scope.projets;
    		return;
    	}
        //$scope.result = _.where($scope.projects, function(row){return name.indexof($scope.search) > -1;});
        for (var i = $scope.projects.length - 1; i >= 0; i--) {
        	var field = (typeof $scope.projects[i][$scope.filter] === Array) ? $scope.projects[i][$scope.filter].join(',') :  $scope.projects[i][$scope.filter];
        	if(field.indexOf($scope.search)>-1){
        		$scope.result.push($scope.projects[i]);
        	}
        }
    };
});