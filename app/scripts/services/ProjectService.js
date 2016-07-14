angular.module('frontendApp')
.service('$Project', function($http, $localStorage, $TestData, $elasticsearch){
	return {
		get : function(callback){
			$elasticsearch.search({
				index : $TestData.index,
				type: $TestData.projectType,
				q:'*',
			    "fields": [
			        "_source"
			    ]
			}, callback);
		},
		groupBy: function(property, callback){
			this.get(function(err, response){
				console.log(response);

				var result = _.chain(response.hits.hits)
				               .groupBy(property)
				               .toPairs()
				               .map(function(currentItem) {
				               	     console.log(currentItem);
							        return _.pick(_.zip([property, "projects"], currentItem));
							    })
							    .value();

				console.log(result);
			});
		},
		Request : function(predica, callback){
			this.get(function(projects){
				callback(_.filter(projects, predica));
			});
		}
	};
});