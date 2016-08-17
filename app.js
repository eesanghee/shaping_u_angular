(function () {
 var app = angular.module('store', []);

 var gem = {
  description: "...",
   name: 'Dodecahedron',
   price: 2.95,
   canPurchase: false;
 };

 app.controller('StoreController', function () {
   this.product = gem;
 });

})();

