vikingStore.factory('shoppingCart', ['productService', function(productService) {

  var shoppingCart = {};

  shoppingCart.items = [];

  shoppingCart.count = function() {
    return Object.keys(shoppingCart.items).length;
  }

  shoppingCart.listAll = function() {
    var itemDetails = [];
    for (product_id in shoppingCart.items) {
      var product = {
        product: productService.findProduct(Number(product_id)),
        quantity: shoppingCart.items[product_id]
      };
      itemDetails.push(product);
    };
    return itemDetails;
  };

  // cart item is placed at index = product.id
  // value of shoppingCart.items[product.id] is the quantity
  shoppingCart.addItem = function(product, quantity) {
    if (quantity) {
      shoppingCart.items[product.id] = quantity;
    } else {
      var currentQuantity = shoppingCart.items[product.id] || 0;
      shoppingCart.items[product.id] = currentQuantity + 1;
    }
    console.log("added item");
  };

  shoppingCart.removeItem = function(product_id) {
    delete shoppingCart.items[product_id];
  };

  shoppingCart.getQuantity = function(product_id) {
    return shoppingCart.items[product_id];
  }

  shoppingCart.updateCart = function(cartItems) {
    cartItems.forEach( function(item) {
      shoppingCart.addItem(item.product, item.quantity)
    });
  };

  return shoppingCart;
  
}])