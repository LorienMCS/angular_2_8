var app = angular.module("teaApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'TeaController'
    }).when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
    }).when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactController'
    }).when('/cart', {
      templateUrl: 'http://lorienmcs.github.io/angular_2_8/partials/cart.html',
      controller: 'CartController'
    }).otherwise({
      redirectTo: '/'
    });
});
