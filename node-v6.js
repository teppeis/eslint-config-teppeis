'use strict';

module.exports = {
  extends: ['./lib/base.js', './lib/node.js', './lib/es2015.js', './lib/es2016.js'],
  rules: {
    'node/no-unsupported-features/es-builtins': [2, {version: '>=6.6'}],
    'node/no-unsupported-features/es-syntax': [2, {version: '>=6.6'}],
    // util.inspect.custom is supported in v6.6
    'node/no-unsupported-features/node-builtins': [2, {version: '>=6.6'}],
  },
};
