vikingStore.factory('shoppingCart', function() {

  var shoppingCart = {};

  shoppingCart.items = [];

  shoppingCart.listAll = function() {

  };

  shoppingCart.addItem = function(product, quantity) {
    shoppingCart.items[product.id] = quantity;
  };

  shoppingCart.removeItem = function(product_id) {
    delete shoppingCart.items[product_id];
  };

  return shoppingCart;
  
})