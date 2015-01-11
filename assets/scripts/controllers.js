'use strict';

kaomojiNinja.controllers = (function(angular) {
	var controllers = angular.module(
		'kaomojiAppControllers',
		[]
	);

	controllers.controller('KaomojiListCtrl', [
		'$scope', 'Kaomoji',
		function ($scope, Kaomoji) {
			var loadedKaomoji = Kaomoji.query();

			$scope.kaomoji = function() {
				return loadedKaomoji;
			};
		}
	]);

	return controllers;
}(angular));
