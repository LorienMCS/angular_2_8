app.controller("TeaController", ["$scope", "$http", "CartService", function($scope, $http, CartService) {
	$scope.cart = CartService.cart;
	$scope.quantities = [1,2,3,4,5,6,7,8,9,10];

	$http.get('tea.json').then(function(object){
		$scope.teas = object.data;
		$scope.categories = [];
		// loop through teas array
		$scope.teas.forEach(function(tea) {
			// loop through categories array in each tea object
			tea.categories.forEach(function(category) {
				// if category is not already in $scope.categories array
				// (indexOf() returns -1 if element is not present in the array)
				if($scope.categories.indexOf(category) == -1) {
					// add category to $scope.categories
					$scope.categories.push(category);
				};
			});
		});
	},function(data){
		$scope.localErr = "not able to get data";
	});

	$scope.addToCart = function(tea, newQty) {
		if(tea.newQty==undefined){
			tea.newQty = 1;
		};
		if($scope.cart.length===0){
			tea.quantity = tea.newQty;
			$scope.cart.push(tea);
		} else {
			$scope.cart.forEach(function(cartTea){
				if(cartTea._id==tea._id) {
					tea.quantity = parseInt(cartTea.quantity,10) + parseInt(tea.newQty,10);
				} else {
					tea.quantity = tea.newQty;
					$scope.cart.push(tea);
				};
			});
		};
	};

}]);


app.controller("CartController", ["$scope", function($scope) {

}]);


app.controller("AboutController", ["$scope", function($scope) {
}]);


app.controller("ContactController", ["$scope", function($scope) {
}]);

