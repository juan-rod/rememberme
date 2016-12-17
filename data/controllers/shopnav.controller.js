function ShopController($scope, $routeParams, DataService, firebase, $firebaseArray) {
	  // get store and cart from service
  // $scope.store = DataService.getStore;
  $scope.cart = DataService.getCart;

  $scope.store=[];

	var ref = firebase.database().ref().child("product_images");

 
  	$scope.store = $firebaseArray(ref);

  // use routing to pick the selected product
  // if ($routeParams.productSku !== null) {
  //   $scope.product = $scope.store.getProduct($routeParams.productSku);
  // }




}
ShopController.$inject=['$scope', '$routeParams','DataService','firebase','$firebaseArray'];
angular
	.module('app')
	.controller('ShopController', ShopController);