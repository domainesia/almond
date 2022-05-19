/// # Specification Tests
/// ## The `require` and `define`

/// Function `require` should be able to pass dependencies to function after definitions.
doh.registerUrl("simple", "../simple.html");
doh.registerUrl("defineNoCallback", "../defineNoCallback/defineNoCallback.html");
doh.registerUrl("packagesNode", "../packagesNode/packagesNode.html");

/// Calling `require(['a'])` in a define (e.g. `define('b', ...)`) will behave
/// as if the module (e.g. 'a') has relation with the defined (dependency graph will be `a -> b`).
/// On the loading process, `a` will get relName of `b` and affected by configured map.
doh.registerUrl("requireInDefine", "../requireInDefine/requireInDefine.html");

/// When creating `require(['a'], function (a) {})` with async mode but the dependencies
/// not yet complete, it will be queued. Once the necessary define (e.g. `define('a', ..)`) called,
/// the require will run.
doh.registerUrl("requireQueued", "../requireQueued/requireQueued.html");

/// When multiple anonymous defines encountered, only the last definition will be recorded.
/// The rest will be overwritten.
doh.registerUrl("anonDefineUseLatest", "../anonDefineUseLatest/anonDefineUseLatest.html");

/// Anonymous defines on a separate file will be named after its file name.
doh.registerUrl("anonAutoNamed", "../anonAutoNamed/anonAutoNamed.html");

/// Multiple definition will override prior definition and provide the latest.
doh.registerUrl("defineDouble", "../defineDouble/defineDouble.html");


/// ## Configuration

doh.registerUrl("configDeps", "../configDeps/configDeps.html");
doh.registerUrl("configAnonIdGenerator", "../configAnonIdGenerator/configAnonIdGenerator.html");
doh.registerUrl("moduleConfig", "../moduleConfig/moduleConfig.html");

/// Process dependencies according to `config.map`.
/// See https://requirejs.org/docs/api.html#config-map.
doh.registerUrl("mapConfig", "../mapConfig/mapConfig.html");
doh.registerUrl("mapConfigStar", "../mapConfig/mapConfigStar.html");
doh.registerUrl("mapConfigStarAdapter", "../mapConfig/mapConfigStarAdapter.html");
doh.registerUrl("mapConfigSpecificity", "../mapConfig/mapConfigSpecificity.html");
doh.registerUrl("mapConfigPlugin", "../mapConfig/mapConfigPlugin.html");


/// ## Plugins

/// Test loader plugin when dependencies contains suffix i.e. `a/plugin!a/file`.
doh.registerUrl("plugins", "../plugins/plugins.html");
doh.registerUrl("pluginRelative", "../plugins/relative/pluginRelative.html");
doh.registerUrl("pluginsMapSameName", "../plugins/pluginMapSameName/pluginMapSameName.html");
doh.registerUrl("orderPlugin", "../plugins/order/order.html");


/// ## Uncategorized

doh.registerUrl("text", "../plugins/text.html");
doh.registerUrl("coffee", "../plugins/coffee.html");
doh.registerUrl("shim", "../shim/shim.html");
doh.registerUrl("unorderedSeparate", "../unordered/separate.html");
doh.registerUrl("emptyFactory", "../emptyFactory/emptyFactory.html");
doh.registerUrl("missing", "../missing/missing.html");
doh.registerUrl("insertRequire", "../insertRequire/insertRequire.html", 4000);
doh.registerUrl("circular", "../circular/circular.html");
doh.registerUrl("circular414", "../circular/414/414.html");
doh.registerUrl("circularTranspiler", "../circular/transpiler/transpiler.html");
doh.registerUrl("relativePaths", "../relativePaths/relativePaths.html");
doh.registerUrl("errback", "../errback/errback.html");
doh.registerUrl("specialDeps", "../specialDeps/specialDeps.html");
doh.registerUrl("hasOwnPropertyTests", "../hasOwnProperty/hasOwnProperty.html");
doh.registerUrl("firstDefine", "../firstDefine/firstDefine.html");
doh.registerUrl("relativeId", "../relativeId/relativeId.html");
doh.registerUrl("topRelativeRequire", "../topRelativeRequire/topRelativeRequire.html");
