vikingStore.directive('productIndex', function() {
  return {
    templateUrl: "js/directives/productIndex.html",
    restrict: "E",
    sceop: {
      product: "="
    }
  };
});