angular.module("frontendApp").service("$userService", function(){
	'use strict';
	return {
		get:function(){
			return ['toto','titi','tata'];
		}
	};
});