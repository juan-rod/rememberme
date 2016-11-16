
function mainNavBar() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/MainNav.html",
		controller: 'MainNavController'

	};
}

angular
	.module('app')
	.directive('mainNavBar', mainNavBar);