'use strict';

angular.module('frontendApp')
.service('$TestData', function(){
	return {
		Project : 'http://localhost:9000/data/projects.json',
		User    : 'http://localhost:9000/data/users.json',
	};
});