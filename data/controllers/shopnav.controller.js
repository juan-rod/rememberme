function ShopController($scope, $routeParams, firebase, $firebaseArray) {
	  // get store and cart from service
  // $scope.store = DataService.getStore;

this.productModal = productModal;
  // $scope.cart = DataService.getCart;

  $scope.store=[];
  $scope.productInfo = [];

	var ref = firebase.database().ref().child("product_images");

 
  $scope.store = $firebaseArray(ref);

    function productModal(id){
      $scope.productModal= $scope.store.$getRecord(id);
       
      console.log("productInfo", $scope.productModal);
      console.log("productInfo title", $scope.productModal.title);
      console.log("productInfo id", $scope.productModal.$id);

      $('#productModal').modal(); 
     
    }



 // use routing to pick the selected product
  // if ($routeParams.productSku !== null) {
  //   $scope.product = $scope.store.getProduct($routeParams.productSku);
  // }




}
ShopController.$inject=['$scope', '$routeParams','firebase','$firebaseArray'];
angular
	.module('app')
	.controller('ShopController', ShopController);