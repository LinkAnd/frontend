/**
* Local Storage Service
*
*/
'use strict';

angular.module('frontendApp')
.service('$localStorage',function(){
	var Session = window.sessionStorage;
	if(typeof Session=== "undefined" ){
		console.error("your browser doesn't support localStorage services upgrade this please");
		return;
	}

	return {
		get : function(key, callback){
			if(Session[key]){
				callback(JSON.parse(Session[key]));
			}else{
				callback({}, {code:404, msg: "Not found"});
			}
		},
		set : function(key, data, callback){
			Session[key] = JSON.stringify(data);
			callback(data);
		}
	};
});