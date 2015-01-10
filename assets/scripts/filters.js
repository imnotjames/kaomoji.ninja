'use strict';

kaomojiNinja.filters = (function(angular) {
	var filters = angular.module(
		'kaomojiAppFilters',
		[]
	);

	filters.filter(
		'startFrom',
		function() {
			return function(input, start) {
				start = parseInt(start); //parse to int

				return input.slice(start);
			}
		}
	);

	return filters;
}(angular));
