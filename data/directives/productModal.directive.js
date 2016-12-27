function productModal() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/modals/productModal.html",
		controller: 'ShopController'

	};
}

angular
	.module('app')
	.directive('productModal', productModal);