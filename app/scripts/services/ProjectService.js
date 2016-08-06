angular.module('frontendApp')
.service('$Project', function($http, $localStorage, $TestData, $rootScope){
	return {
		get : function(callback){
			$http
			.get($TestData.project+'project')
			.success(function(res){
				callback({},res);
			});
		},
		groupBy: function(property, callback){
			$http
			.get($TestData.project+property)
			.success(function(res){
				callback(res);
			});
		},
		Request : function(predica, callback){
			this.get(function(projects){
				callback(_.filter(projects, predica));
			});
		},
		getByTag: function(tag, callback){
			$http
			.post($TestData.project+'tags', {"tag":tag})
			.success(callback);
		}
	};
});