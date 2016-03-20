'use strict';

angular.module('frontendApp')
.service('$TestData', function($http, $localStorage){
	return {
		Project : {
			get : function(callback){
                $localStorage.get("projects", function(data, err){
                	if(err){
                		$http.get('http://localhost:9000/data/projects.json')
						.then(function(res, err){
							if(!err){
								$localStorage.set("projects", res.data, callback);
							}
						});
                	}else{
                		callback(data);
                	}
                });
			},
			groupBy: function(property, callback){
				this.get(function(projects){
					var group = [];
					_.map(projects, function(project){
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
				});
			}
		},
	};
});