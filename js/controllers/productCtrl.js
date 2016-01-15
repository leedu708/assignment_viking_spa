vikingStore.controller('ProductCtrl', ['$scope', 'productService', function($scope, productService) {

  $scope.products = productService.products;
  $scope.categories = productService.categories;

  $scope.filterOn = function(category_id) {
    $scope.categoryFilter = { category: { id: category_id } };
  };

}]);