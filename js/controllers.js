app.controller("TeaController", ["$scope", "$http", "CartService", function($scope, $http, CartService) {
	$scope.cart = CartService.cart;

	$http.get('tea.json').then(function(object){
		$scope.teas = object.data;
		console.log($scope.teas);
	},function(data){
		$scope.localErr = "not able to get data";
	});

}]);


app.controller("CartController", ["$scope", function($scope) {

}]);


app.controller("AboutController", ["$scope", function($scope) {
}]);


app.controller("ContactController", ["$scope", function($scope) {
}]);

