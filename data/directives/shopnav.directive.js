
function shopNavBar() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/ShopNav.html",
		controller: 'ShopNavController'

	};
}

angular
	.module('app')
	.directive('shopNavBar', shopNavBar);