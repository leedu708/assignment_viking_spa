var vikingStore = angular.module('VikingStore', ['ui.router']);

vikingStore.config( function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/products/index");

  $stateProvider
    .state('products', {
      url: '/products',
      templateUrl: 'js/templates/products/layout.html',
      controller: 'ProductCtrl'
    })

    .state('products.index', {
      url: '/index',
      templateUrl: 'js/templates/products/index.html'
    })

});

vikingStore.run( function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});