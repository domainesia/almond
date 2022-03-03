#!/bin/sh
rm cashew.min.js.gz
cp cashew.js /tmp/tmp-cashew.js
sed -i -n -e '/\/\* devblock:start \*\//{' -e 'p' -e ':a' -e 'N' -e '/\/\* devblock:end \*\//!ba' -e 's/.*\n//' -e '}' -e 'p'  /tmp/tmp-cashew.js
uglifyjs -c -m -o cashew.min.js /tmp/tmp-cashew.js
gzip cashew.min.js
ls -la cashew.min.js.gz

