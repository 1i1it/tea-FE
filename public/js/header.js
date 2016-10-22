app.controller('headerCtrl', function($scope, $cookieStore, Cart) {
   $scope.cart = Cart;
   $scope.text = ' search by tea name'
});
