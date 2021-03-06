vikingStore.factory('productService', function() {

  var productService = {};

  productService.getCategory = function(category_id) {
    return this.categories.filter( function(category) {
      return (category.id === category_id);
    })[0];
  };

  productService.randomCategory = function() {
    var index = Math.floor(Math.random() * productService.categories.length);
    return productService.categories[index];
  };

  productService.findProduct = function(product_id) {
    return this.products.filter( function(product) {
      return (product.id === product_id);
    })[0];
  };

  productService.categories = [];
  cat_id = 0;
  while (cat_id < 8) {
    category_name = faker.commerce.department();

    // ensure unique category
    check = $.grep(productService.categories, function(category) {
      return (category.name === category_name);
    });

    if (!check.length) {
      var category = {
        id: cat_id,
        name: faker.commerce.department()
      };

      productService.categories.push(category);
      cat_id++;
    }
  };

  productService.products = [];
  for (i = 0; i < 24; i++) {
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