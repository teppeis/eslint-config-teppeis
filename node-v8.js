'use strict';

module.exports = {
  extends: [
    './lib/base.js',
    './lib/node.js',
    './lib/es2015.js',
    './lib/es2016.js',
    './lib/es2017.js',
    // Node v8 has object rest/spread properties,
    // but doesn't have Promise#finally and async iterators
    './lib/es2018.js',
  ],
  rules: {
    'no-restricted-globals': [2, 'URL', 'URLSearchParams'],
    'node/no-unsupported-features': [2, {version: 8.3}],
  },
};
