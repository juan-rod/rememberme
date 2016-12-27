	function config($routeProvider){
		$routeProvider
		    .when('/home',{
		       templateUrl : "data/partials/home2.html",
		       controller : "MainController"
		    })
		    .when('/blog',{
		       templateUrl : "data/partials/BlogNav.html"
		    })
		     .when('/admin',{
		      templateUrl : "data/partials/admin/admin.login.html"
		    }) 
		     .when('/about',{
		      templateUrl : "data/partials/about.html"
		    })
		    .when('/adminConsole/',{
		      templateUrl : "data/partials/admin/admin.console.html"
		    })
		    .when('/shop', { 
      			templateUrl: 'data/partials/shop/store.html',
      			controller: ShopController 
      		})
    		.when('/products/:productSku', {
      			templateUrl: 'data/partials/shop/product.html',
      			controller: ShopController 
      		})
    		.when('/cart', { 
      			templateUrl: 'data/partials/shop/shoppingCart.html',
      			controller: ShopController 
      		})
		    .otherwise({
		      redirectTo: '/home'
		    });
	}


angular
	.module('app',['ngRoute','firebase','ngCart'])
	.config(config);
