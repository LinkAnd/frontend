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
	'use strict';
	$scope.open = function(){
		var url = "https://twitter.com/intent/tweet?text=%22yop%22";
		window.open(url,'Share with twitter');
	};
};