'use strict';

angular.module('frontendApp')
.service('$TestData', function($http){
	return {
		Project : {
			get : function(callback){
				$http.get('http://localhost:9000/data/projects.json')
				.then(function(res, err){
					if(!err)
					   callback(res.data);
				});
			}
		},
	};
});