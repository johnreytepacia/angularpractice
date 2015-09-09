(function (module) {

	module.config(function ($stateProvider) {
		var route = $stateProvider;
		route.state('route.home', {
			url: '/',
			templateUrl: 'app/home/home.html',
			controller: 'homeController as vm'
		});
	});

})(angular.module('app.home', []));