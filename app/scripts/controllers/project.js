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

    $scope.getProjectsByTags = function(){
        var tags = {};
        _.map($scope.projects, function(r){
           _.map(r.tags, function(t){
               if(!tags[t]){
                   tags[t] = [];
               }
               tags[t].push(r);
           });
        });
        return tags;
    };

    $scope.getReach = function(){
    	$scope.result = [];
    	if($scope.search === null){
    		$scope.result = $scope.projects;
    		return;
    	}
    };
});