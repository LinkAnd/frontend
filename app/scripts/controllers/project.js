'use strict';

angular.module('frontendApp')
.controller('ProjectCtrl', function($Project, $scope){

    $Project.groupBy('tags', function(group){
        $scope.group = group;
    });

    $scope.search = null;

    $scope.getReach = function(){
        $scope.result = [];
        if($scope.search === null){
            $scope.result = $scope.projects;
            return;
        }

        _.forEach($scope.projects, function(project){
            if(JSON.stringify(project).toLowerCase().indexOf($scope.search.toLowerCase()) > -1){
                $scope.result.push(project);
            }
        });
    };

    $scope.selectTag = function(tag){
        $scope.tagSelected = tag;
        $scope.projects = tag.projects;
        $scope.result = tag.projects;
        $scope.search = '';
    };

    

});