vikingStore.controller('CartCtrl', 
  ['$scope', '$rootScope', 'shoppingCart', 
  function($scope, $rootScope, shoppingCart) {

    $scope.totalValue = shoppingCart.calculateTotal();

    $rootScope.cartCount = function() {
      return shoppingCart.count();
    };

    $scope.cartItems = shoppingCart.listAll();

    $scope.updateCart = function() {
      shoppingCart.updateCart($scope.cartItems);
      $scope.totalValue = shoppingCart.calculateTotal();
    };

    $scope.removeItem = function(id) {
      shoppingCart.removeItem(id);
      $scope.cartItems = shoppingCart.listAll();
      $scope.totalValue = shoppingCart.calculateTotal();
    } 

}])