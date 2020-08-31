(function (global) {
'use strict';

	var list = [
		{name: "beers", quantiy:20},
		{name: "chips", quantiy:3},
		{name: "cookies", quantiy: 30},
		{name: "pizzas", quantiy: 40},
		{name: "olives", quantity: 50}
	];

	var boughtList = [];

	angular.module('myApp', [])
	.controller('myBuyController', myBuyController)
	.controller('myBoughtController', myBoughtController)
	.service('myService', myService);


	myBuyController.$inject = ['myService'];
	function myBuyController(myService){
		var buy = this;
		buy.items = myService.getItemsBuy();
		buy.bought = function(index){
			myService.buyItem(index);
		};
	}

	myBoughtController.$inject = ['myService'];
	function myBoughtController(myService){
		var bought = this;
		bought.items = myService.getItemsBought();
	}

	function myService(){
		var service = this;

		var buyItems = list;

		var boughtItems = boughtList;

		service.buyItem = function(itemIndex){
			var item = list[itemIndex];
			service.addBoughtItem(item);
			service.remove(item);
		};

		service.getItemsBuy = function(){
			return buyItems;
		}

		service.getItemsBought = function(){
			return boughtItems;
		};

		service.addBoughtItem = function(item){
			boughtItems.push(item);
		};

		service.remove = function(itemIndex){
			buyItems.splice(itemIndex, 1);
		};

	}
})();