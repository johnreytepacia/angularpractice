(function (module) {

	module.config(function ($stateProvider, $urlRouterProvider) {
		var route = $stateProvider;

		route.state('route', {
			abstract: true,
			template: '<ui-view></ui-view>'
		});

		$urlRouterProvider.otherwise('/');
	});

})(angular.module('app'));