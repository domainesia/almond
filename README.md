# cashew

A replacement [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) loader for
[RequireJS](http://requirejs.org). It provides a minimal AMD API footprint that includes [loader plugin](http://requirejs.org/docs/plugins.html) support. Only useful for built/bundled AMD modules, does not do dynamic loading.

## Why

Some developers like to use the AMD API to code modular JavaScript, but after doing an optimized build,
they do not want to include a full AMD loader like RequireJS, since they do not need all that functionality.
Some use cases, like mobile, are very sensitive to file sizes.

By including cashew in the built file, there is no need for RequireJS.
cashew is around **1 kilobyte** when minified with Closure Compiler and gzipped.

Using cashew you can load scripts asynchronously with `defer` or `async` without worry about the order.
If the dependencies present, your (main) script will be loaded. Cashew is only support browser use-case
with strict policy on already loaded resources. It can't fetch dynamic resource and that is out of scope.

So, you get great code cleanliness with AMD and the use of powerful loader plugins
in a tiny wrapper that makes it easy for others to use your code even if they do not use AMD.

## Restrictions

It is best used for libraries or apps that use AMD and:

* use to reference script already present for the webpage, in the form of `<script></script>`, `defer` or `async` supported.
* only have **one** requirejs.config() or require.config() call.
* the requirejs.config/require.config call needs to be included in the build output. This is particularly important for making sure any [map config](http://requirejs.org/docs/api.html#config-map) use still works.
* do not use the `var require = {};` style of [passing config](http://requirejs.org/docs/api.html#config).
* do not use [RequireJS multiversion support/contexts](http://requirejs.org/docs/api.html#multiversion).
* do not use require.toUrl() or require.nameToUrl().
* do not use [packages/packagePaths config](http://requirejs.org/docs/api.html#packages). If you need to use packages that have a main property, [volo](https://github.com/volojs/volo) can create an adapter module so that it can work without this config. Use the `amdify add` command to add the dependency to your project.

What is supported:

* dependencies with IDs.
* define('id', {}) definitions and define(factoryFn) within other script tag.
* define(), require() and requirejs() calls.
* loader plugins that can inline their resources into optimized files, and
can access those inlined resources synchronously after the optimization pass.
The [text](http://requirejs.org/docs/api.html#text) and
[CoffeeScript](https://github.com/requirejs/require-cs) plugins are two such plugins.

## Download

[Latest release](https://github.com/requirejs/cashew/raw/latest/cashew.js)

## Usage
Include the javascript as early before any script you want to include as dependencies.
Remember, some module / script may not expose global namespace if `require` function in cashew exists.

You can use `require('module-name')` if you're sure the module has been executed. Or use asynchronous form
`require([ 'module-name' ], function (namedModuleDep) { ... })`.

## Exporting a public API
Use UMD or AMD module convention that usually used for the web (do not expect auto fetch script resource).

## License

MIT

## Code of Conduct

[jQuery Foundation Code of Conduct](https://jquery.org/conduct/).

## Common errors

Explanations of common errors:

### incorrect module build, no module name

In cashew 3.0.0 and earlier, this would show up as "deps is undefined", where
this line is mentioned:

    if (!deps.splice) {

In 3.0.1+ the error is explicitly: "incorrect module build, no module name".

This means that there is a define()'d module, but it is missing a name,
something that looks like this:

    define(function () {});
    //or
    define([], function () {});


when it should look like:

    define('someName', function () {});
    //or
    define('someName', [], function () {});


This is usually a sign that the tool you used to combine all the modules
together did not properly name an anonymous AMD module.

Multiple modules built into a single file **must** have names in the define calls.
Otherwise cashew has no way to assign the module to a name key for use in the code.

The fix is to use a build tool that understand AMD modules and inserts the module
IDs in the build. The
[requirejs optimizer](http://requirejs.org/docs/optimization.html) is a build tool
that can do this correctly.

### x missing y

It means that module 'x' asked for module 'y', but module 'y' was not available.

This usually means that 'y' was not included in the built file that includes cashew.

cashew can only handle modules built in with it, it cannot dynamically load
modules from the network.


### No y

It means that a `require('y')` call was done but y was not available.

This usually means that 'y' was not included in the built file that includes cashew.

cashew can only handle modules built in with it, it cannot dynamically load
modules from the network.

## How to get help

* Open issues in the [issue tracker](https://github.com/requirejs/cashew/issues).

## Contributing

Almond follows the
[same contribution model as requirejs](http://requirejs.org/docs/contributing.html)
and is considered a sub-project of requirejs.
