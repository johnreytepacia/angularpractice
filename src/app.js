(function (module) {

	angular.element(document).ready(function () {
		angular.bootstrap(document, ['app']);
	});

})(angular.module('app', [
	'ui.router',
	'app.home',
	'app.users'
]));