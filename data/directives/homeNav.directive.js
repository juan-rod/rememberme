
function homeNav() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/homeNav.html",
		controller: 'BlogNavController'

	};
}

angular
	.module('app')
	.directive('homeNav', homeNav);