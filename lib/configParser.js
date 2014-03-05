'use strict';

exports.getConfig = function () {
	return {
		"m": {
			"expand": "margin",
			params: {
				"^(\\d+)(px)?$": "$1px"
			}
		}
	};
};