	function config($routeProvider){
		$routeProvider
		    .when('/home',{
		       templateUrl : "data/partials/home.html",
		       controller : "MainController"
		    })
		    .when('/blog',{
		       templateUrl : "data/partials/BlogNav.html"
		    })
		     .when('/admin',{
		      templateUrl : "data/partials/admin/admin.login.html"
		    })
		    .when('/adminConsole/',{
		      templateUrl : "data/partials/admin/admin.console.html"
		    })
		    .otherwise({
		      redirectTo: '/home'
		    });
	}


angular
	.module('app',['ngRoute','firebase'])
	.config(config);
