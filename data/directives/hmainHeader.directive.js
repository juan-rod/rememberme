
function hmainHeader() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/home_MainHeader.html",
		controller: 'MainHeaderController'

	};
}

angular
	.module('app')
	.directive('hmainHeader', hmainHeader);