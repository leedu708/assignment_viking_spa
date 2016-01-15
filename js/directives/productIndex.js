vikingStore.directive('productIndex', function() {
  return {
    templateUrl: "js/directives/productIndex.html",
    restrict: "E",
    scope: {
      product: "=",
      addItem: "&"
    }
  };
});