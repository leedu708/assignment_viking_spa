vikingStore.controller('ShowCtrl', 
  ['$scope', '$stateParams', 'productService', 'shoppingCart', 
  function($scope, $stateParams, productService, shoppingCart) {

  $scope.product = productService.findProduct(Number($stateParams.id));
  $scope.quantity = 1;

}]);