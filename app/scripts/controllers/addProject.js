'use strict';

angular.module('frontendApp')
.controller('addProjectCtrl', function($Project, $scope, $location, $rootScope, $sanitize){
	if(!$rootScope.user){
		$location.path('/');
	}
	
	$scope.tags = [
		'fun',
		'science',
		'technology',
		'art',
		'dance',
		'litterature',
		'video-game'
	];

	$scope.project = {
		name:"",
		description:"",
		url:"", 
		tags:"",
		author:""
	};

	$scope.submitForm = function(valid){
		// sanitize name
		$scope.project.name= $sanitize($scope.project.name);
		if(!$scope.project.name){
			return false;
		}
		// sanitize description	
		$scope.project.description = $sanitize($scope.project.description);
		if(!$scope.project.description){
			return false;
		}
		// sanitze url
		var urlPattern = new RegExp("(http|ftp|https)://[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?");
		if($scope.project.url.match(urlPattern)){
			return false;
		}
		console.log($scope.project.tags);
	}


});