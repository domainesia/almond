# API
Cashew provides AMD essential API with slight extension in configs and browser settings.
We take reference from original documentation, and extends it further here.
So, please spare some time reading these docs.

- [AMD section](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) – most relevant to this doc
- [AMD API README](https://github.com/amdjs/amdjs-api)
- [Why AMD?](https://requirejs.org/docs/whyamd.html)

These docs is for full blown AMD. Since our implementation is a fork of RequireJS's Almond, a mini AMD loader, with several improvement to comply with the doc, it will be getting different.

## Function `require.config(cfg)`
Configuration for Cashew: it affect how we do things according to the library user case.

```typescript
interface CashewConfig {
    debug?: bool,
    map?: Map<String, String>,
    forceRequireSync?: (currentScript: HTMLScriptElement) => bool | bool,
    anonIdGenerator?: (currentScript: HTMLScriptElement) => String,
}

require.config(cfg: CashewConfig);
// or
require(cfg: CashewConfig);
```

### Config `debug`
It is development build only option that enable a visible `console.log` or `warn` or `error`
when something needs attention or go amiss.

### Config `map`
Covered in [RequireJS map config](https://requirejs.org/docs/api.html#config-map).

In short, it is a way to make alias for your module or specify a module loaded in certain module context
i.e. when you load module `B` from module `A` and you need a specific `B` that differ from the rest.

### Config `forceRequireSync`
Force `require()` call script to run synchronously, every time or with condition.
You can, for example, only make `require()` async when using `<script async="">` and synchronous on other event.

### Config `anonIdGenerator`
By default, Cashew will use `<script src="...">`'s `src` attribute to name anonymous module (the absolute URL).
But, each application or web has preference on how to transform these `src` into module identifier.


## Function `define()`
This is the general signature is as covered in [original doc](https://github.com/amdjs/amdjs-api/blob/master/AMD.md#define-function-).

```typescript
define(id?: String, dependencies?: Array<String>, factory: Function);
```

The general effect is the factory function will be stored in queue until something requires it.

On the implementation there are hightlighted cases that Cashew handles.
You should see the tests `readme.md` for the case we anticipated.

## Function `require()` or  `requirejs()` or `req()`
The general signature as follows.

```typescript
require(deps: Array<String>, fn: Function, relName?: String, forceSync?: bool);
```

The `fn` will have parameters of specified `deps` injected.

```typescript
require([ 'jquery', 'backbone' ], function ($, backbone) {});
```

Another signature,

```typescript
require(config: CashewConfig, deps: Array<String>, fn: Function, relName?: String, forceSync?: bool);
```

This signature provide individual config just for a require run.

The `require()` also can be originated from factory function parameter. In that case it can be used like NodeJS's `require`.

```typescript
define(function (require, exports, module) {
    const $ = require('jquery');
});
```

### Parameter `relName`
This parameter is useful when used in conjuction with `CashewConfig.map`. This tells that the require is called within the module context of `relName`. 

### Parameter `forceSync`
When calling with `forceSync` set to `true` the function `fn` will be executed right away in sync manner.
