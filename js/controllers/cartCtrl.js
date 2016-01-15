vikingStore.controller('CartCtrl', 
  ['$scope', '$rootScope', 'shoppingCart', 
  function($scope, $rootScope, shoppingCart) {

    $rootScope.cartCount = function() {
      return shoppingCart.count();
    };

    $scope.cartItems = shoppingCart.listAll();

    $scope.updateCart = function() {
      shoppingCart.updateCart($scope.cartItems);
    };

    $scope.removeItem = function(id) {
      shoppingCart.removeItem(id);
      $scope.cartItems = shoppingCart.listAll();
    }

}])