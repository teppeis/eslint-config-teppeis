'use strict';

module.exports = {
  extends: [
    './lib/base.js',
    './lib/node.js',
    './lib/es2015.js',
    './lib/es2016.js',
    './lib/es2017.js',
    // to parse object rest/spread properties
    './lib/es2018.js',
  ],
  rules: {
    'no-restricted-globals': [2, 'URL', 'URLSearchParams'],
    'node/no-unsupported-features': [2, {version: 8.3}],
  },
};
