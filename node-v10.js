'use strict';

module.exports = {
  extends: [
    './lib/base.js',
    './lib/node.js',
    './lib/es2015.js',
    './lib/es2016.js',
    './lib/es2017.js',
    './lib/es2018.js',
  ],
  rules: {
    'node/no-unsupported-features/es-builtins': [2, {version: '>=10.6'}],
    'node/no-unsupported-features/es-syntax': [2, {version: '>=10.6'}],
    // dns.promise is supported in v10.6
    'node/no-unsupported-features/node-builtins': [2, {version: '>=10.6'}],
  },
};
