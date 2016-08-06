'use strict';

angular.module('frontendApp')
.service('$TestData', function(){
	return {
		index : 'linkand',
		project : 'http://localhost:3001/',
		identity : 'http://localhost:3000/',
		userType: 'Users'
	};
});