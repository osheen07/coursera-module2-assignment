(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var controller = this;
  controller.buyItems = ShoppingListCheckOffService.ItemsToBuy();

  controller.BuyAnItem = function (index) {
    ShoppingListCheckOffService.BuyItem(index);
  };
};

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var controller = this;
  controller.boughtItems = ShoppingListCheckOffService.ItemsBought();
}

function ShoppingListCheckOffService() {
  var service = this;
  var toBuy = [
    {name: "Milk", quantity:"1"},
    {name: "Noodles", quantity: "10"},
    {name: "Pasta", quantity: "2"},
    {name: "Pesto Sauce", quantity: "3"},
    {name: "Pineapple", quantity: "2"}
  ];
  var alreadyBought = [];

  this.ItemsToBuy = function () {
    return toBuy;
  };

  this.ItemsBought = function () {
    return alreadyBought;
  };

  this.BuyItem = function(index){
    var item = toBuy[index];
    alreadyBought.push(item);
    toBuy.splice(index, 1);
  };

};
})();
