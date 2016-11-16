
function blogNavBar() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/BlogNav.html",
		controller: 'BlogNavController'

	};
}

angular
	.module('app')
	.directive('blogNavBar', blogNavBar);