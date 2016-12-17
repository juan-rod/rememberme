
function addProduct() {
	return{
		restrict: 'E',
		templateUrl: "data/partials/admin/content/admin.addProduct.html"

	};
}

angular
	.module('app')
	.directive('addProduct', addProduct);