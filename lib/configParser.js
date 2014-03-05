'use strict';

var fs = require('fs');

exports.getConfig = function () {
	return require("./config");
};

exports.generateConfig = function (grunt) {
	var snippets = grunt.file.readJSON("lib/snippets.json");
	var outputMap = {};

	Object.keys(snippets).forEach(function (snippetName) {
		var splitSnippetName = snippetName.split(":");
		if (splitSnippetName.length > 1) {
			var snippetValue = snippets[snippetName],
				splitSnippetValue = snippetValue.split(":");

			if (!outputMap[splitSnippetName[0]]) {
				outputMap[splitSnippetName[0]] = {
					expand: splitSnippetValue[0],
					params: {}
				};
				outputMap[splitSnippetName[0]].params["^(\\d+)(px)?$"] = "$1px";
				outputMap[splitSnippetName[0]].params["^(\\d+)pct$"] = "$1%";
			}
			outputMap[splitSnippetName[0]].params[splitSnippetName[1]] = splitSnippetValue[1];
		}
	});

	var output = "'use strict';\n";
	output += "module.exports = ";
	output += JSON.stringify(outputMap, null, "\t");
	output += ";";

	grunt.file.write("lib/config.js", output);
};