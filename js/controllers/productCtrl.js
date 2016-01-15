vikingStore.controller('ProductCtrl', 
  ['$scope', '$rootScope', 'productService', 'shoppingCart',
  function($scope, $rootScope, productService, shoppingCart) {

  $rootScope.cartCount = function() {
    return shoppingCart.count();
  };

  $scope.products = productService.products;
  $scope.categories = productService.categories;

  $scope.page = {
    number: 1,
    perPage: 3,
    offset: function() { return (this.number - 1) * this.perPage }
  };

  $scope.filterOn = function(category_id) {
    $scope.categoryFilter = { category: { id: category_id } };
  };

  $scope.addItem = function(product) {
    shoppingCart.addItem(product);
  };

  $scope.pageDown = function() {
    if ($scope.page.number > 1) {
      $scope.page.number--;
    };
  };

  $scope.pageUp = function() {
    var totalPages = Math.ceil($scope.products.length / $scope.page.perPage);
    if ($scope.page.number < totalPages) {
      $scope.page.number++;
    };
  };

  $scope.resetPage = function() {
    $scope.page.number = 1;
  };

}]);