angular.module('frontendApp').directive('share', function (LocaleService) { 
	'use strict';

	return {
		restrict : 'E',
		replace: true,
		template : '<a class="btn btn-primary" ng-click="open()">Share</a>',
		controller : LocalCtlr
	};
});


var LocalCtlr = function($scope){
	$scope.open = function(){
		alert('open modal');
	};
};