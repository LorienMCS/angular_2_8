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
		if($scope.cart.length===0 || tea.quantity == undefined){
			tea.quantity = tea.newQty;
			tea.subtotal = (tea.price/100 * tea.quantity);
			$scope.cart.push(tea);
		} else {
			$scope.cart.forEach(function(cartTea){
				if(cartTea._id===tea._id) {
					tea.quantity = parseInt(tea.quantity, 10) + parseInt(tea.newQty, 10);
					tea.subtotal = (tea.price/100 * tea.quantity);
				};
			});
		};
	};

}]);


app.controller("CartController", ["$scope", "CartService", function($scope, CartService) {
	$scope.cart = CartService.cart;
	$scope.isEmpty = false;
	$scope.newTotal = 0;
	$scope.total = 0;
	$scope.editing = true;
	$scope.save = true;
	$scope.canEdit = false;

	if($scope.cart.length===0){
		$scope.isEmpty = true;
	};

	$scope.cart.forEach(function(tea){
			$scope.total += tea.subtotal;
	});

	$scope.edit = function(tea) {
		tea.newQty = 0;
		this.editing = false;
		this.save = false;
		this.canEdit = true;
	};

	$scope.editQty = function(tea, newQty) {
		$scope.cart.forEach(function(cartTea){
			if(cartTea._id===tea._id) {
				tea.quantity = parseInt(tea.newQty, 10);
				tea.subtotal = (tea.price/100 * tea.quantity);
				cartTea.subtotal = tea.subtotal;
			};
		});
	};

	$scope.saveTotal = function(tea) {
		$scope.cart.forEach(function(cartTea){
			$scope.newTotal += cartTea.subtotal;
		});
		$scope.total = $scope.newTotal;
		$scope.newTotal = 0;
		this.editing = true;
		this.save = true;
		this.canEdit = false;
	};

	$scope.remove = function(tea) {
		var cartArr = $scope.cart;
		for(var i = 0; i < cartArr.length; i++) {
			if(cartArr[i]._id===tea._id) {
				cartArr.splice(i, 1);
			};
		};
		cartArr.forEach(function(cartTea){
			$scope.newTotal += cartTea.subtotal;
		});
		$scope.total = $scope.newTotal;
		$scope.newTotal = 0;
		if($scope.cart.length===0){
			$scope.isEmpty = true;
		};
	};

}]);


app.controller("AboutController", ["$scope", function($scope) {
}]);


app.controller("ContactController", ["$scope", function($scope) {
}]);

