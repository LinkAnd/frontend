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
		me : function(token, callback){
			$http({method: 'GET', url: $TestData.identity+'authorize', headers: {'accessToken' : token} })
			.success(function(response){
				callback(response);
	    		$rootScope.user = response;
	    		$rootScope.isConnected = true;
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