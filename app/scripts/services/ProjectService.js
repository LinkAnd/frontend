angular.module('frontendApp')
.service('$Project', function($http, $localStorage, $TestData, $elasticsearch){
	return {
		get : function(callback){
			$elasticsearch.search({
				index : $TestData.index,
				type: $TestData.projectType,
				q:'*',
				_source:''

			}, callback);
		},
		groupBy: function(property, callback){
			$elasticsearch.search({
				index: $TestData.index,
				type : $TestData.projectType,
				q:'*',
				_source:true,
				"aggs": {
				    "group_by_state": {
				      "terms": {
				        "field": "tags"
				      }
				    }
				  }
			}, function(error, response){
				console.log(response);
			});
		},
		Request : function(predica, callback){
			this.get(function(projects){
				callback(_.filter(projects, predica));
			});
		}
	};
});