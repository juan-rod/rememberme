function ShopController($scope, $routeParams, DataService) {
	  // get store and cart from service
  $scope.store = DataService.getStore;
  $scope.cart = DataService.cart;

  // use routing to pick the selected product
  if ($routeParams.productSku !== null) {
    $scope.product = $scope.store.getProduct($routeParams.productSku);
  }




}
angular
	.module('app')
	.controller('ShopController', ShopController);