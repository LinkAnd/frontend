'use strict';

angular.module('frontendApp')
.controller('addProjectCtrl', function($Project, $scope, $location, $rootScope, $sanitize){
	/*if(!$rootScope.user){
		$location.path('/');
	}*/
	
	$scope.errors = {};

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
			console.log('ici');
			projectForm.name.$error = _.extend(projectForm.name.$error , {"bad":true});
			return false;
		}
		// sanitize description	
		$scope.project.description = $sanitize($scope.project.description);

		if(!$scope.project.description){
			projectForm.description.$error = _.extend(projectForm.description.$error, {required:true});
			return false;
		}
		if($scope.project.description.length  < 25 && $scope.project.description.length >  255){
			rojectForm.description.$error = _.extend(projectForm.description.$error, {length:true});
			return false;
		}
		//sanitize and secure tags
		if($scope.project.tags.length > 2){
			projectForm.tags.$error = _.extend(projectForm.tags.$error, {maxlength:true});
			return false;
		}
		$scope.project.tags.map(function(tag){
			return $sanitize(tag);
		});

		$Project.add($scope.project, 
			function(data){console.log(data);},
			function(err){console.log(err)}
		);		
	}


});