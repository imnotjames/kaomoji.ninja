'use strict';

var kaomojiNinja = {};

kaomojiNinja.app = angular.module(
	'kaomojiApp',
	[
		'ngRoute',

		'kaomojiAppControllers',
		'kaomojiAppFilters',
		'kaomojiAppServices'
	]
);

kaomojiNinja.app.config(
	[
		'$routeProvider',
		function ($routeProvider) {
			$routeProvider
				.when(
					'/',
					{
						templateUrl: 'partials/kaomoji-list.html',
						controller: 'KaomojiListCtrl'
					}
				)
				.otherwise({ redirectTo: '/' });
		}
	]
);
