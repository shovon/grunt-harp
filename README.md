# grunt-harp

> A grunt task for either running a Harp server, or compile your site using harp.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-harp --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-harp');
```

## The "harp" task

### Overview

In your project's Gruntfile, add a section named `harp` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  harp: {
    server: {
      server: true,
      source: 'src'
    },
    dist: {
      source: 'src',
      dest: 'build'
    }
  },
})
```

### Options

#### options.server

Type: `Boolean`    
Default value: `false`

Used to determine whether or not to spawn a server. If set to true, a server will be spawned. However, a static site won't be generated.

#### options.source

Type: `String`    
Default value: `'./'`

The directory of which to get the source files from.

#### options.dest

Type: `String`    
Default value: `build`

The directory of which to store the generated site.

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  harp: {
    server: {
      server: true
    },
    dist: {}
  },
})
```

#### Custom Options

```js
grunt.initConfig({
  harp: {
    server: {
      server: true,
      source: 'src'
    },
    dist: {
      source: 'src',
      dest: 'build'
    }
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).