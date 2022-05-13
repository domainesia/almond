# Contribution Guide
This module is a foundation of other module and should be carefully developed.
We have `tests/` that ensure all the feature run and in-sync with each other.
It may costs you time, but your team time-saving will be guaranteed.

## Running Specification
To run the spec, please run the server first.

```
$ node tests/server.js
```

Then, run the tests using `phantomjs` (please install on your machine first).

```
$ phantomjs servers/runner.js
```

## Create Specification
Please develop this module by creating some tests first based on the scenario
then start to hack.

To create a test scenario, create a dir in the `tests/` with concise name, also
some `.html` and `.js` inside, by default with the same name.
Then add the HTML file into `tests/all.js`, even better by adding documentation
to expand the scenario you want to support.

## Hacking and Compile
Modify `cashew.js` file. If you're done, run the `shrinktest.sh`.
Both the `cashew.js` and `cashew.min.js.gz` (unarchive first) is ready to be used.

## Debug
The development version `cashew.js` has global variable `cashew` that can be evaluated
on Web Console. This is not available in the production minified build.
You can look up what modules has been loaded and what not, what is currently loaded but not used (i.e. `cashew.waiting`) 
and what require entrypoints not yet run (i.e. `pendingMains`).

## Release
Bump `package.json` for the next version and upload using GitHub npm repository.
