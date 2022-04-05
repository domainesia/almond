// Bad anonimous define only can be called once for each file.

var shouldBeModuleContent = null;
var throwCount = 0;

try {
  require(['modA.js'], function(a) {
    shouldBeModuleContent = a;
  }, null, true);
} catch (e) {
  // Should not called
  throwCount += 1;
}

doh.register(
    'anonAutonamed',
    [
        function anonAutonamed(t){
            t.is(0, throwCount);
            t.is({
                content: "Hello world, modA",
            }, shouldBeModuleContent);
        }
    ]
);
doh.run();
