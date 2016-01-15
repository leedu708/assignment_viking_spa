vikingStore.controller('ProductCtrl', 
  ['$scope', '$rootScope', 'productService', 'shoppingCart',
  function($scope, $rootScope, productService, shoppingCart) {

  $rootScope.cartCount = function() {
    return shoppingCart.count();
  };

  $scope.products = productService.products;
  $scope.categories = productService.categories;

  $scope.filterOn = function(category_id) {
    $scope.categoryFilter = { category: { id: category_id } };
  };

  $scope.addItem = function(product) {
    shoppingCart.addItem(product);
  };

}]);