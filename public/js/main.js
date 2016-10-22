  
var app = angular.module('myApp', ["ngRoute","ngCookies"]);

var root_url = "http://localhost:9797/";

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "tea_store.html",
		controller: 'teasCtrl',
	})
	.when("/one_tea", {
		templateUrl : "one_tea.html",
		controller: 'oneTeaCtrl'
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


