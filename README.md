file-suffix
===========

[![NPM Status][npm-img]][npm]
[![Travis Status][test-img]][travis]
[![Windows Status][appveyor-img]][appveyor]
[![Coverage Status][coverage-img]][coveralls]

[npm]:          https://www.npmjs.org/package/file-suffix
[npm-img]:      https://img.shields.io/npm/v/file-suffix.svg

[travis]:       https://travis-ci.org/blond/file-suffix
[test-img]:     https://img.shields.io/travis/blond/file-suffix.svg?label=tests

[appveyor]:     https://ci.appveyor.com/project/blond/file-suffix
[appveyor-img]: http://img.shields.io/appveyor/ci/blond/file-suffix.svg?style=flat&label=windows

[coveralls]:    https://coveralls.io/r/blond/file-suffix
[coverage-img]: https://img.shields.io/coveralls/blond/file-suffix.svg

A file suffix is a substring of basename after the first dot.

Install
-------

```
$ npm install --save file-suffix
```

Usage
-----

```js
const suffix = require('file-suffix');

suffix('./lib/file.js'); // ➜ js
suffix('index.html');    // ➜ html
suffix('build.tar.gz');  // ➜ tar.gz
```

Related
-------

* [file-stem](https://github.com/blond/file-stem)

License
-------

MIT © [Andrew Abramov](https://github.com/blond)
