
function mainHeader() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/MainHeader.html",
		controller: 'MainHeaderController'

	};
}

angular
	.module('app')
	.directive('mainHeader', mainHeader);