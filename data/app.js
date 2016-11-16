	function config($routeProvider){
		$routeProvider
		    .when('/home',{
		       templateUrl : "data/partials/home.html",
		       controller : "MainController"
		    })
		    .otherwise({
		      redirectTo: '/home'
		    });
	}


angular
	.module('app',['ngRoute'])
	.config(config);
