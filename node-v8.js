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
    // Atomics and SharedArrayBuffer are supported in v8.10
    'node/no-unsupported-features/es-builtins': [2, {version: '>=8.10'}],
    'node/no-unsupported-features/es-syntax': [2, {version: '>=8.10'}],
    'node/no-unsupported-features/node-builtins': [2, {version: '>=8.10'}],
    'node/no-deprecated-api': [
      2,
      {
        ignoreModuleItems: [
          'assert.deepEqual',
          'assert.equal',
          'assert.notDeepEqual',
          'assert.notEqual',
        ],
      },
    ],
  },
};
