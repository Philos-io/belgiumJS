import angular from 'angular';


let {
	module,
	bootstrap
} = angular;


module('app', [])
	.controller("AsyncController", function($http){
		debugger;

		$http.get('https://api.github.com/user/davyengone')
			.then(function(res){
				debugger
			});		
	});

console.log('inside here');


	bootstrap(document.body, ['app']);
