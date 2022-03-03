// Bad anonimous define only can be called once for each file.

var throwCount = 0;


try {
  define(['a'], function(a) {
      return a;
  });
} catch (e) {
  // Should not called
  throwCount += 1;
}

try {
  define(function(require) {
    // Should not called
    return require('b');
  });
} catch (e) {
  throwCount += 1;
}


doh.register(
    'badAnonDefine',
    [
        function badAnonDefine(t){
            t.is(0, throwCount);
        }
    ]
);
doh.run();
