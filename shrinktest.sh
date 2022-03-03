#!/bin/sh
rm cashew.min.js.gz
uglifyjs -c -m -o cashew.min.js cashew.js
gzip cashew.min.js
ls -la cashew.min.js.gz

