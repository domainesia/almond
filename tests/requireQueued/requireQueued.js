// Bad anonimous define only can be called once for each file.

var throwCount = 0;
var result = null;

try {
    require(['a'], function(a) {
        result = a;
        return a;
    });
} catch (e) {
    // Should not called
    throwCount += 1;
}

try {
    define('a', function(require) {
        return "WOW";
    });
} catch (e) {
    throwCount += 1;
}


doh.register(
    'requireQueued',
    [
        function requireQueued(t){
            t.is(0, throwCount);
            t.is("WOW", result)
        }
    ]
);
doh.run();
