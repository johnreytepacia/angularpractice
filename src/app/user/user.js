(function (module) {

	module.config(function ($stateProvider) {
		var route = $stateProvider;

		route.state('route.users', {
			url: '/users',
			views: {
				'': {
					templateUrl: 'app/user/user.html',
					controller: 'usersController as vm'
				},
				'footer@route.users': {
					templateUrl: 'app/user/user.footer.html'
				}
			}
		});
	});

})(angular.module('app.users', []));