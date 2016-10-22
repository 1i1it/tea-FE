  
var app = angular.module('myApp', ["ngRoute","ngCookies"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "tea_store.html",
		controller: 'teasCtrl',
		type: 'expensive'
	})
	.when("/one_tea", {
		templateUrl : "one_tea.html",
		controller: 'oneTeaCtrl'
	})
	.when("/filters", {
		templateUrl : "filters.html"
	})
	.when('/search/:value', {
		templateUrl: 'tea_store.html',
		controller: 'teasCtrl'
	})
	.when('/:filterType/:filterVal', {
		templateUrl: 'tea_store.html',
		controller: 'teasCtrl'
	})

});


