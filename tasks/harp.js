module.exports = function (grunt) {
  var harp = require('harp');
  var _ = require('lodash');
  var path = require('path');

  grunt.registerMultiTask('harp', 'Compile a harp website, or run a web server', function () {
    var options = {};
    var done = this.async();
    _.assign(options, this.data);
    _.assign(options, {
      server: false,
      source: './',
      dest: 'build'
    });
    var source = path.resolve(options.source);
    grunt.log.writeln(source);
    var dest = path.resolve(options.dest);
    grunt.log.writeln(dest);
    if (options.server) {
      harp.server(source);
    } else {
      harp.compile(source, dest, function (err, output) {
        if (err) {
          grunt.fail.fatal(err.message);
        }
        grunt.log.write(output);
      });
    }
  });
};