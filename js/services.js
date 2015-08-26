app.factory('CartService', function(){
	var CartService = {};
	CartService.cart = [];

	CartService.addTea = function(tea) {
		CartService.cart.push(tea);
	};

	CartService.getCart = function() {
		return CartService.cart;
	};

	return CartService;
});