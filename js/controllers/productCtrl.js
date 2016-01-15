vikingStore.controller('ProductCtrl', ['$scope', 'productService', function($scope, productService) {

  $scope.products = productService.products;
  $scope.categories = productService.categories;

}]);