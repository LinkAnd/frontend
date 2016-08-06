'use strict';

angular.module('frontendApp')
.controller('ProjectCtrl', function($Project, $scope, $location){

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
        $Project.getByTag(tag, function(projects){
            $scope.projects= projects;
            $scope.result = projects;
        });
    };

    $scope.gotoAdd = function(){
        $location.path('/addProject');
    }

    $scope.displayTotalProject = function(event){
        console.log(event);
    }    

});