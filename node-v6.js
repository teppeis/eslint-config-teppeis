'use strict';

module.exports = {
  extends: ['./lib/base.js', './lib/node.js', './lib/es2015.js', './lib/es2016.js'],
  rules: {
    'no-restricted-globals': [2, 'URL', 'URLSearchParams'],
    'node/no-unsupported-features': [2, {version: 6}],
  },
};
