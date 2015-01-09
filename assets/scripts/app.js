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

		}
	]
);
