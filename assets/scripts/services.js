'use strict';

kaomojiNinja.services = (function(angular) {
	var services = angular.module(
		'kaomojiAppServices',
		[
			'ngResource'
		]
	);

	services.factory(
		'Kaomoji',
		[
			'$resource',
			function($resource){
				return $resource(
					'data/kaomoji.json',
					{},
					{
						query: {
							method: 'GET',
							params: {},
							cache: true,
							isArray: true,
							transformResponse: function(data, headers) {
								var decodedData = angular.fromJson(data);

								return decodedData;
							}
						}
					}
				);
			}
		]
	);

	return services;
}(angular));
