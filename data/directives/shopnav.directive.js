
function shopNavBar() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/ShopNav.html",
		controller: 'ShopController'

	};
}

angular
	.module('app')
	.directive('shopNavBar', shopNavBar);