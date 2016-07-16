angular.module('frontendApp')
.service('$Project', function($http, $localStorage, $TestData, $rootScope){
	return {
		get : function(callback){
			$http
			.get($TestData.project)
			.success(function(res){
				callback({},res);
			});
		},
		groupBy: function(property, callback){
			/**
			* TODO : this process must be move to backend and simplify
			*/
			this.get(function(err, response){
				var t = _.groupBy(response, function(item){
					return _.flatten(item.tags);
				});
				/**
				* TODO : it's very dirty
				*/
				var split = _.filter(Object.keys(t), function(item){
					return item.indexOf(',') > -1;
				});
				_.forEach(split, function(s){
					var tab = s.split(',');
					_.forEach(t[s], function(project){
						_.forEach(tab, function(tag){
							t[tag].push(project);
						});
					});
				});
				callback(_.omit(t, split));
			});
		},
		Request : function(predica, callback){
			this.get(function(projects){
				callback(_.filter(projects, predica));
			});
		}
	};
});