angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider


	$routeProvider.when('/home',
		{
			templateUrl:    'home.html',
			controller:     'HomeCtrl'
		});
	$routeProvider.when('/about',
		{
			templateUrl:    'about.html',
			controller:     'AboutCtrl'
		});
	$routeProvider.when('/contact',
		{
			templateUrl:    'contact.html',
			controller:     'ContactCtrl'
		});

	$locationProvider.html5Mode(true);

}]);



