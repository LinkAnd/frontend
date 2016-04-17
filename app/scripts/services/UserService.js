angular.module('frontendApp')
.service('$User', function($http, $localStorage, $TestData){
	return {
		get : function(callback){
            $localStorage.get("projects", function(data, err){
            	if(err){
            		$http.get($TestData.User)
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
		},
		Request : function(predica, callback){
			this.get(function(projects){
				callback(_.filter(projects, predica));
			});
		}
	};
});