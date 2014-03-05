/*
 * grunt-atomicize
 * https://github.com/jkap/grunt-atomicize
 *
 * Copyright (c) 2014 Josh Kaplan
 * Licensed under the MIT license.
 */

'use strict';

var htmlparser = require('htmlparser'),
    config = require('../lib/config');

module.exports = function(grunt) {
  grunt.registerMultiTask('atomicize', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});
    var outputMap;
    var htmlHandler = new htmlparser.DefaultHandler(function (error, dom) {
      if (error) {
        grunt.log.warn('There was an error', error);
        return;
      }

      var classes = dom[0].attribs.class.split(" ");
      classes.forEach(function (className) {
        var splitClass = className.split('-');
        if (splitClass.length > 1) {
          if (config[splitClass[0]]) {
            var configBlock = config[splitClass[0]];
            Object.keys(configBlock.params).forEach(function (regexString) {
              var regexp = new RegExp(regexString, "gi");
              if (regexp.test(splitClass[1])) {
                if (!outputMap[className]) {
                  var cssString = splitClass[1].replace(regexp, configBlock.params[regexString]);
                  outputMap[className] = configBlock.expand + ": " + cssString + ";";
                }
              }
            });
          }
        }
      });
    });
    var parser = new htmlparser.Parser(htmlHandler);

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      outputMap = {};
      // Concat specified files.
      f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(filepath) {
        // Read file source.
        var fileContents = grunt.file.read(filepath);
        parser.parseComplete(fileContents);
      });

      var output = [];

      Object.keys(outputMap).forEach(function (className) {
        output.push("\t." + className + " {");
        output.push("\t\t" + outputMap[className]);
        output.push("\t}");
      });

      output.unshift("body {");
      output.push("}");

      // Write the destination file.
      grunt.file.write(f.dest, output.join("\n"));

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};
