'use strict';

angular.module('frontendApp')
.service('$TestData', function($http){
	return {
		Project : {
			get : function(callback){
				$http.get('http://localhost:9000/data/projects.json')
				.then(function(res, err){
					if(!err){
						callback(res.data);
					}
				});
			},
			groupBy: function(property, callback){
				$http.get('http://localhost:9000/data/projects.json')
				.then(function(res, err){
					var group = [];
					if(!err){
						_.map(res.data, function(project){
                           _.map(project[property], function(value){
                           	    var g =_.find(group,{name:value});
                                if(!g){
                                	group.push({name:value, projects:[]});
                                	g =_.find(group,{name:value});
                                }
                                g.projects.push(project);
                           });
						});
						callback(group);
					}
				});
			}
		},
	};
});