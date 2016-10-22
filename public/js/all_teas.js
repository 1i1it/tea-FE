app.controller('teasCtrl', function($scope, $http, $route, $cookieStore, Cart) {
	window.teasCtrl = $scope;

	$scope.cart = Cart;
	$scope.showFiltered = function() {
		$http.get(root_url + "show_teas?" + $scope.filterType + "=" + $scope.filterVal)
		.then(function (response) {
			$scope.teas = response.data.teas;
		});
	}

	$scope.showText= function() {
		$http.get(root_url + "show_teas?name="  + $scope.value)
		.then(function (response) {
			$scope.teas = response.data.teas;
		});
	}

	if ($route.current && $route.current.params.filterType) {
		$scope.filterType = $route.current.params.filterType;
		$scope.filterVal = $route.current.params.filterVal;
		$scope.showFiltered();
	} else if ($route.current && $route.current.params.value) {
		$scope.value = $route.current.params.value;
		$scope.showText();
	} else {
		$http.get(root_url + "expensive_teas")
		.then(function (response) {
			$scope.teas = response.data.teas;
		});
	};

	window.scope = $scope;

});

