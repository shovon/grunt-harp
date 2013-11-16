# grunt-harp

> Run the harp server, or compile your site

## Getting Started

Requires Grunt `~0.4.0`

Be sure that you know how to work with Grunt. Take a look at the *[Getting Started](http://gruntjs.com/getting-started)*.

Once you are certain you know how to work with Grunt, you can install the plugin like so:

```javascript
npm install grunt-harp --save-dev
```

And then, your Gruntfile can load the plugin like so:

```javascript
grunt.loadNpmTasks('grunt-harp');
```

## Options

### server

Type: `Boolean` Default value: `false`

If set to true, the task will spawn a server. Otherwise, it will compile the site instead.

### source

type: `String` Default value: `./`

The directory from where to listen for changes to.

### build

type `string` Default value: `build`

The directory where to compile the site to. Only used when the `server` option is set to false.

## Example Usage

```javascript
grunt.initConfig({
  harp: {
    server: {
      server: true,
      source: './src'
    },
    compile: {
      source: './src',
      dest: './bin'
    }
  }
})
```