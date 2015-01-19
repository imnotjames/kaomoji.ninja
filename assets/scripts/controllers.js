'use strict';

kaomojiNinja.controllers = (function(angular) {
	var controllers = angular.module(
		'kaomojiAppControllers',
		[]
	);

	controllers.controller('KaomojiListCtrl', [
		'$scope', 'Kaomoji',
		function ($scope, Kaomoji) {
			$scope.kaomoji = [];

			Kaomoji.query(function (data, headers) {
				$scope.kaomoji = data;
			});

			$scope.select = function($event) {
				$event.target.select();
			};

			var page = 0;

			$scope.paging = {
				perPage: 16,

				page: function() {
					return page;
				},

				startFrom: function() {
					return page * $scope.paging.perPage
				},

				count: function() {
					return Math.ceil(
						$scope.kaomoji.length / $scope.paging.perPage
					);
				},

				next: function() {
					if (page < $scope.paging.count() - 1) {
						page += 1;
					}
				},

				previous: function() {
					if (page > 0) {
						page -= 1;
					}
				}
			};
		}
	]);

	return controllers;
}(angular));
