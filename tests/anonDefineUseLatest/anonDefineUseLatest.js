// Anonimous define can only be called once for each file.
// If multiple found, we only record module from the latest call.

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
    'anonDefineUseLatest',
    [
        function anonDefineUseLatest(t){
            t.is(0, throwCount);
        }
    ]
);
doh.run();
