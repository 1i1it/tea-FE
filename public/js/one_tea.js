app.controller('oneTeaCtrl', function($scope, $http, $route, $cookieStore, Cart) {
	window.oneTeaCtrl = $scope;
	$scope.cart = Cart;
	
	$scope.id= $route.current.params._id;
	$http.get(root_url + "one_tea?_id=" + $scope.id)
	.then(function (response) {
		$scope.selectedTea = response.data.tea;
	});
});