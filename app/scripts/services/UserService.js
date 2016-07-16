angular.module('frontendApp')
.service('$User', function($http, $localStorage, $TestData, $rootScope){
	return {
		get : function(id, callback){
            $http
            .get($TestData.identity+'whois/'+id)
            .success(function(response){
            	callback(response);
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