"use strict";

module.exports = {
  "extends": [
    "./lib/base.js",
    "./lib/node.js",
    "./lib/es2015.js",
  ],
  "rules": {
    "node/no-unsupported-features": [2, {"version": 4}],
    // Not yet in Node v4
    "prefer-destructuring": 0,
    "prefer-rest-params": 0,
    "prefer-spread": 0,
  },
};
