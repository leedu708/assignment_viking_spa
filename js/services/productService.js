vikingStore.factory('productService', function() {

  var productService = {};

  productService.getCategory = function(id) {
    return this.categories.filter( function(category) {
      return (category.id === id);
    })[0];
  };

  productService.randomCategory = function() {
    var index = Math.floor(Math.random() * productService.categories.length);
    return productService.categories[index];
  };

  productService.categories = [];
  for (i = 1; i < 9; i++) {
    var category = {
      id: i,
      name: faker.commerce.department()
    };
    productService.categories.push(category);
  };

  productService.products = [];
  for (i = 1; i < 25; i++) {
    var product = {
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.paragraph(),
      category: productService.randomCategory()
    };
    productService.products.push(product);
  };


  return productService;
  
})