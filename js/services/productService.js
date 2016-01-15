vikingStore.factory('productService', function() {

  var productService = {};

  productService.getCategory = function(id) {
    return this.categories.filter( function(category) {
      return (category.id === id);
    })[0];
  };

  productService.randomCategory = function() {
    var index = Math.floor(Math.random() * productService.categories.length);
    return index;
  };

  productService.categories = [];
  for (i = 1; i < 9; i++) {
    var cat = {
      id: i,
      name: faker.commerce.department()
    };
    productService.categories.push(cat);
  };

  productService.products = [];
  for (i = 1; i < 25; i++) {
    var product = {
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.paragraph(),
      category_id: productService.randomCategory()
    };
    productService.products.push(product);
  };


  return productService;
  
})