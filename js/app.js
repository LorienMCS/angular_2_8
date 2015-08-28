var app = angular.module("teaApp", ['ngRoute']);

var site_prefix = 'http://lorienmcs.github.io/angular_2_8'

app.config(function($routeProvider) {
  $routeProvider
    .when(site_prefix + '/', {
      templateUrl: 'partials/home.html',
      controller: 'TeaController'
    }).when(site_prefix + '/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutController'
    }).when(site_prefix + '/contact', {
      templateUrl: 'partials/contact.html',
      controller: 'ContactController'
    }).when(site_prefix + '/cart', {
      templateUrl: '/partials/cart.html',
      controller: 'CartController'
    }).otherwise({
      redirectTo: site_prefix + '/'
    });
});
