/*
 * grunt-harp
 * https://github.com/shovon/grunt-harp
 *
 * Copyright (c) 2013 Salehen Shovon Rahman
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var harp = require('harp');
  var path = require('path');

  grunt.registerMultiTask('harp', 'A grunt task for either running a Harp server, or compile your site using harp.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var done = this.async();
    var defaults = {
      server: false,
      source: './',
      dest: 'build'
    };
    var options = this.options(defaults, this.data);
    var source = path.resolve(options.source);
    var dest = path.resolve(options.dest);
    if (options.server) {
      harp.server(source, { port: 9000 }, function () {
        console.log('Harp server running on port %d', 9000);
      });
    } else {
      harp.compile(source, dest, function (err) {
        if (err) {
          grunt.fail.fatal(err.message);
        }
        grunt.log.writeln('Site successfully compiled!');
        done();
      });
    }
  });

};
