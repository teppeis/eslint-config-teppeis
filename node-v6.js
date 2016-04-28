"use strict";

module.exports = {
  "extends": [
    "./lib/base.js",
    "./lib/node.js",
    "./lib/es6.js",
  ],
  "rules": {
    "node/no-unsupported-features": [2, {"version": 6}],
  }
};
